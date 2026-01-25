// dev.js
import { createServer } from 'vite'

async function startDevServer() {
  const server = await createServer({
    // any vite config overrides, if needed
  })
  await server.listen()
  server.printUrls()
}

startDevServer()
