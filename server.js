import fs from 'fs/promises'
import path from 'path'
import { createServer as createViteServer } from 'vite'
import express from 'express'
const PORT = 5001
const server = express()
const DEV_ENV = 'development'
const develop = process.env.NODE_ENV === DEV_ENV ? true : false

const bootstrap = async () => {
  let vite

  if (develop) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    server.use(vite.middlewares)
  }

  if (!develop) {
    server.use('dist/client')
  }

  server.use( '*', async (req, res, next) => {
      const url = req.originalUrl
      let template, render

      try {
        if (develop) {
          template = await fs.readFile(path.resolve('./index.html'), 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
        }
        if (!develop) {
          template = await fs.readFile(
            path.resolve('dist/client/index.html'),
            'utf-8'
          )
          render = (await import('./dist/server/entry-server.js')).render
        }

        const appHtml = await render({ path: url })
        const html = template.replace('<!--ssr-outlet-->', appHtml)

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html').end(html)
        // res.send(html)
      } catch (error) {
        vite.ssrFixStacktrace(error)
        next(error)
      }
    }
  )

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

bootstrap()
