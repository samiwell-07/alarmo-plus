// Build for the "Alarmo Card Plus" fork: same source, but every custom element is renamed
// so this card can be installed next to the official alarmo-card without name clashes.
// CARD_SUFFIX=dev produces a separate "alarmo-card-dev" for local testing (npm run dev).
import config from './rollup.config.mjs';

const suffix = process.env.CARD_SUFFIX || 'plus';
const label = suffix === 'plus' ? 'Plus' : `Plus (${suffix})`;

const ELEMENTS = /(?<![\w-])alarmo-(card-editor|card|button|state-badge|sensor-badge|actions-bar)(?![\w-])/g;

const renameElements = {
  name: 'rename-elements',
  renderChunk(code) {
    return {
      code: code
        .replace(ELEMENTS, `alarmo-$1-${suffix}`)
        .replace(/(["'`])Alarmo Card\1/g, `$1Alarmo Card ${label}$1`)
        .replace(/ALARMO-CARD /g, `ALARMO-CARD-${suffix.toUpperCase()} `),
      map: null,
    };
  },
};

export default config.map(entry => ({
  ...entry,
  output: { ...entry.output, entryFileNames: `alarmo-card-${suffix}.js` },
  // Run before terser so the replaced strings are minified like the rest of the bundle.
  plugins: [...entry.plugins.slice(0, -1), renameElements, entry.plugins[entry.plugins.length - 1]],
}));
