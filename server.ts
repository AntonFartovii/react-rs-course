import fs from 'fs/promises';
import path from 'path';
import { createServer, ViteDevServer } from 'vite';
import express from 'express';
const PORT = 5001;
const server = express();
const DEV_ENV = 'development';
const develop: boolean = process.env.NODE_ENV === DEV_ENV ? true : false;

const bootstrap = async () => {
  let vite: ViteDevServer;

  if (develop) {
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    server.use(vite.middlewares);
  }

  if (!develop) {
    server.use('dist/client');
  }

  server.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    let template, render;

    try {
      if (develop) {
        template = await fs.readFile(path.resolve('./index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      }
      if (!develop) {
        template = await fs.readFile(path.resolve('dist/client/index.html'), 'utf-8');
        const filePath = './dist/server/entry-server.js';
        await fs.access(filePath, fs.constants.F_OK);
        render = (await import(filePath)).render;
      }

      const appHtml = await render({ path: url });
      const html = template?.replace('<!--ssr-outlet-->', appHtml);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html').end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error as Error);
    }
  });

  server.listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
  });
};

bootstrap();
