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

  watch(
    `${resourceDirectory}/images/**/*`,
    series(Image, () => {})
  )
  watch(
    `${resourceDirectory}/${styleDirectory}/**/*.scss`,
    series(Style, () => {})
  )
  watch(
    `${resourceDirectory}/${esDirectory}/**/*.js`,
    series(Script, () => {})
  )
  watch(`${buildDirectorySrc}/**/*`).on('change', () => {})
  if (useLaravel) {
    watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, () => {})
    )
  } else if (usePhp) {
    watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, () => {})
    )
  } else if (useWordpress) {
    watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, () => {})
    )
  } else {
    watch(
      `${resourceDirectory}/views/**/*.html`,
      series(HTML, () => {})
    )
  }
  if (useEjs) {
    watch(
      `${resourceDirectory}/views/**/*.ejs`,
      series(EJS, () => {})
    )
  }
  if (useVue) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.vue`,
      series(Script, () => {})
    )
  }
  if (useTs) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.ts`,
      series(Script, () => {})
    )
  }
  if (useReact) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.jsx`,
      series(Script, () => {})
    )
  }
  if (useTsx) {
    watch(
      `${resourceDirectory}/${esDirectory}/**/*.tsx`,
      series(Script, () => {})
    )
  }
  if (useVendor) {
    watch(
      `${resourceDirectory}/vendors/**/*`,
      series(Vendor, () => {})
    )
  }
  if (useAudio) {
    watch(`${resourceDirectory}/audios/**/*`, series(Audio, browserSync.reload))
  }
  cb()
}

export default MainServer
