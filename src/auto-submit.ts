// Automatic attempts are sent with a context_id from this range. Alarmo echoes the context_id in its card events,
// so every Plus card (on any device) can recognise the "invalid code" event of an automatic attempt and hide it.
// The range stays below Number.MAX_SAFE_INTEGER so the ids survive the JSON round trip.
const AUTO_CONTEXT_MIN = 8_000_000_000_000_000;
const AUTO_CONTEXT_MAX = 9_000_000_000_000_000;

export const isAutoSubmitContext = (contextId: unknown): boolean =>
  typeof contextId === 'number' && contextId >= AUTO_CONTEXT_MIN && contextId < AUTO_CONTEXT_MAX;

const newAutoSubmitContext = (): number =>
  AUTO_CONTEXT_MIN + Math.floor(Math.random() * (AUTO_CONTEXT_MAX - AUTO_CONTEXT_MIN));

// Maximum number of candidate codes waiting behind the attempt in flight.
export const AUTO_SUBMIT_MAX_PENDING = 10;

// Returns the codes to try for the current input: the whole input when it has the length of a user code, or with
// `anywhere` the last N digits for every user code length N.
export const autoSubmitCandidates = (input: string, lengths: number[], anywhere: boolean): string[] =>
  lengths.filter(length => (anywhere ? input.length >= length : input.length === length)).map(length => input.slice(-length));

// Returns the candidates for every prefix of `input` that was not checked yet, in typing order, so a paste or several
// characters arriving in one input event are checked the same way as typing them one by one. `processed` is the
// input already checked; when the input was edited (not only appended), checking starts after the common prefix.
export const newInputCandidates = (
  processed: string,
  input: string,
  lengths: number[],
  anywhere: boolean
): string[][] => {
  let common = 0;
  while (common < processed.length && common < input.length && processed[common] === input[common]) common++;
  const result: string[][] = [];
  for (let end = common + 1; end <= input.length; end++) {
    result.push(autoSubmitCandidates(input.slice(0, end), lengths, anywhere));
  }
  return result;
};

interface QueuedCode {
  code: string;
  target: string;
}

// Sends candidate codes one at a time: the next attempt only starts when the previous service call has completed.
export class AutoSubmitQueue {
  private pending: QueuedCode[] = [];
  private tried = new Set<string>();
  private inFlight?: number;

  constructor(
    private send: (code: string, contextId: number, target: string) => Promise<unknown>,
    // Called when candidates arrive faster than they can be checked. The queue is reset; nothing is dropped silently.
    private onSaturated: () => void,
    // Called when the service call itself fails (connection lost, service error), which is not an invalid code.
    private onError: (error: unknown) => void,
    // Checked right before every attempt; queued codes are dropped when it returns false (feature turned off,
    // card removed, or the code was queued for another alarm entity).
    private canSend: (target: string) => boolean
  ) { }

  // Returns false when the queue was saturated and reset.
  public add(codes: string[], target: string): boolean {
    for (const code of codes) {
      const key = `${target}\n${code}`;
      if (this.tried.has(key) || this.pending.some(e => e.target === target && e.code === code)) continue;
      if (this.pending.length >= AUTO_SUBMIT_MAX_PENDING) {
        this.cancel();
        this.onSaturated();
        return false;
      }
      this.pending.push({ code, target });
    }
    this.next();
    return true;
  }

  // Forgets pending and tried candidates, e.g. after success, the clear button or a state change.
  // A request that was already sent cannot be revoked; only the following ones are prevented.
  public cancel(): void {
    this.pending = [];
    this.tried.clear();
  }

  private next(): void {
    if (this.inFlight !== undefined || !this.pending.length) return;
    const entry = this.pending.shift()!;
    if (!this.canSend(entry.target)) {
      this.cancel();
      return;
    }
    const key = `${entry.target}\n${entry.code}`;
    this.tried.add(key);
    const contextId = newAutoSubmitContext();
    this.inFlight = contextId;
    this.send(entry.code, contextId, entry.target).then(
      () => {
        this.inFlight = undefined;
        this.next();
      },
      error => {
        this.inFlight = undefined;
        // The code was not checked by Alarmo: it may be tried again, and nothing else is sent until the user
        // types again.
        this.tried.delete(key);
        this.pending = [];
        this.onError(error);
      }
    );
  }
}
