import { createServer } from 'http';
import server from './dist/server/server.js';

const handler = async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const request = new Request(url, { method: req.method, headers: req.headers });
  const response = await server.fetch(request);
  const text = await response.text();
  res.end(text);
};

const s = createServer(handler);
s.listen(3001, async () => {
  try {
    const res = await globalThis.fetch('http://localhost:3001/');
    const html = await res.text();
    import('fs').then(fs => fs.writeFileSync('./dist/client/index.html', html));
    console.log("index.html generated!");
  } finally {
    s.close();
    process.exit(0);
  }
});
