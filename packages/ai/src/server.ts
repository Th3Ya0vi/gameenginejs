import { orchestrate, type Prompt } from './index.js';
import http from 'node:http';

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end('Only POST supported');
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    const prompts: Prompt[] = JSON.parse(body ?? '[]');
    const result = await orchestrate(prompts);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });
});

server.listen(8787, () => {
  console.log('AI orchestrator stub listening on http://localhost:8787');
});
