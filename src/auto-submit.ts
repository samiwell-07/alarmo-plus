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

// Sends candidate codes one at a time: the next attempt only starts when the previous service call has completed.
export class AutoSubmitQueue {
  private pending: string[] = [];
  private tried = new Set<string>();
  private inFlight?: number;

  constructor(
    private send: (code: string, contextId: number) => Promise<unknown>,
    // Called when candidates arrive faster than they can be checked. The queue is reset; nothing is dropped silently.
    private onSaturated: () => void
  ) { }

  public add(codes: string[]): void {
    for (const code of codes) {
      if (this.tried.has(code) || this.pending.includes(code)) continue;
      if (this.pending.length >= AUTO_SUBMIT_MAX_PENDING) {
        this.cancel();
        this.onSaturated();
        return;
      }
      this.pending.push(code);
    }
    this.next();
  }

  // Forgets pending and tried candidates, e.g. after success, the clear button or a state change.
  public cancel(): void {
    this.pending = [];
    this.tried.clear();
  }

  private next(): void {
    if (this.inFlight !== undefined || !this.pending.length) return;
    const code = this.pending.shift()!;
    this.tried.add(code);
    const contextId = newAutoSubmitContext();
    this.inFlight = contextId;
    const done = () => {
      this.inFlight = undefined;
      this.next();
    };
    this.send(code, contextId).then(done, done);
  }
}
