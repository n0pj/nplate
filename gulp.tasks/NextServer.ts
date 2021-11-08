import { useNext, express, proxyPort, browsersyncPort } from './Constants'

const NextServer = cb => {
  if (useNext) {
    const next = require('next')
    const dev = process.env.NODE_ENV !== 'production'
    const app = next({ dev })
    const handle = app.getRequestHandler()

    app
      .prepare()
      .then(() => {
        const server = express()

        server.get('*', (request, result) => {
          return handle(request, result)
        })

        server.listen(proxyPort, error => {
          if (error) throw error
          console.log(
            `> Server setup complete ${process.env.CLIENT_URL ||
              `http://localhost:${browsersyncPort}`}`
          )
        })
      })
      .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
      })
  }
  cb()
}

export default NextServer
