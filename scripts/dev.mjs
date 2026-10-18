// Local test loop for the fork: rebuilds dist/alarmo-card-dev.js on every source change and
// serves it at http://localhost:5000/alarmo-card-dev.js so Home Assistant can load it as a resource.
import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const PORT = Number(process.env.PORT) || 5000;
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(root, 'dist', 'alarmo-card-dev.js');

createServer((req, res) => {
  const headers = { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' };
  if (req.url.split('?')[0] !== '/alarmo-card-dev.js' || !existsSync(file)) {
    res.writeHead(404, headers);
    return res.end('Not found (still building?)');
  }
  res.writeHead(200, { ...headers, 'Content-Type': 'text/javascript; charset=utf-8' });
  createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`Serving http://localhost:${PORT}/alarmo-card-dev.js`));

spawn('npx', ['rollup', '-c', 'rollup.config.plus.mjs', '--watch'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, CARD_SUFFIX: 'dev' },
});
