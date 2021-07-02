import {
  gulpConnectPhp,
  browserSync,
  series,
  watch,
  serverPort,
  resourceDirectory,
  buildDirectory,
  buildDirectorySrc,
  useVendor,
  useEjs,
  usePhp,
  phpBin,
  phpIni,
  styleDirectory,
  esDirectory,
  host,
  useVue,
  useReact,
  useNext,
  useReactTsx,
  useTs,
  useTsx,
  useProxy,
  express,
  browsersyncPort,
  proxyPort,
  open,
  useLaravel,
  useWordpress,
  useAudio
} from './Constants'
import Vendor from './Vendor'
import Image from './Image'
import Style from './Style'
import Script from './Script'
import EJS from './EJS'
import PHP from './PHP'
import HTML from './HTML'
import Audio from './Audio'

const MainServer = cb => {
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
          open(`http://localhost:${browsersyncPort}`)
        })
      })
      .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
      })
  }
  if (usePhp && !useNext) {
    gulpConnectPhp.server(
      {
        port: 80,
        base: `${buildDirectory}/`,
        bin: phpBin,
        ini: phpIni
      },
      () => {
        browserSync({
          proxy: host
        })
      }
    )
  } else {
    let serverSettings = {
      port: browsersyncPort,
      server: {
        baseDir: `${buildDirectory}/`
      },
      open: false
    }

    if (!useNext) {
      serverSettings.open = true
    }

    if (useProxy) {
      serverSettings.proxy = host
      delete serverSettings.server
    }
    browserSync(serverSettings)
  }

  watch(`${resourceDirectory}/images/**/*`, series(Image, browserSync.reload))
  watch(
    `${resourceDirectory}/${styleDirectory}/**/*.scss`,
    series(Style, browserSync.reload)
  )
  watch(
    `${resourceDirectory}/${esDirectory}/**/*.js`,
    series(Script, browserSync.reload)
  )
  watch(
    `${resourceDirectory}/${esDirectory}/**/*.jsx`,
    series(Script, browserSync.reload)
  )
  watch(`${buildDirectorySrc}/**/*`).on('change', browserSync.reload)
  if (useLaravel) {
    watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, browserSync.reload)
    )
  } else if (usePhp) {
    watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, browserSync.reload)
    )
  } else if (useWordpress) {
    watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, browserSync.reload)
    )
  } else {
    watch(
      `${resourceDirectory}/views/**/*.html`,
      series(HTML, browserSync.reload)
    )
  }
  if (useEjs) {
    watch(
      `${resourceDirectory}/views/**/*.ejs`,
      series(EJS, browserSync.reload)
    )
  }
  if (useVue) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.vue`,
      series(Script, browserSync.reload)
    )
  }
  if (useTs) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.ts`,
      series(Script, browserSync.reload)
    )
  }
  if (useReact) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.jsx`,
      series(Script, browserSync.reload)
    )
  }
  if (useTsx) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.tsx`,
      series(Script, browserSync.reload)
    )
  }
  if (useVendor) {
    watch(
      `${resourceDirectory}/vendors/**/*`,
      series(Vendor, browserSync.reload)
    )
  }
  if (useAudio) {
    watch(`${resourceDirectory}/audios/**/*`, series(Audio, browserSync.reload))
  }
  cb()
}

export default MainServer
