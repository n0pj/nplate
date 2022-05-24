import {
  gulpConnectPhp,
  browserSync,
  series,
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
  useAudio,
} from './Constants'
import Vendor from './Vendor'
import Image from './Image'
import Style from './Style'
import Script from './Script'
import EJS from './EJS'
import PHP from './PHP'
import HTML from './HTML'
import Audio from './Audio'
import gulp from 'gulp'

const MainServer = (cb) => {
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

        server.listen(proxyPort, (error) => {
          if (error) throw error
          console.log(
            `> Server setup complete ${
              process.env.CLIENT_URL || `http://localhost:${browsersyncPort}`
            }`
          )
          open(`http://localhost:${browsersyncPort}`)
        })
      })
      .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
      })
  }

  gulp.watch(
    `${resourceDirectory}/images/**/*`,
    series(Image, () => {})
  )
  gulp.watch(
    `${resourceDirectory}/${styleDirectory}/**/*.scss`,
    series(Style, () => {})
  )
  gulp.watch(
    `${resourceDirectory}/${esDirectory}/**/*.js`,
    series(Script, () => {})
  )
  gulp.watch(`${buildDirectorySrc}/**/*`).on('change', () => {})
  if (useLaravel) {
    gulp.watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, () => {})
    )
  } else if (usePhp) {
    gulp.watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, () => {})
    )
  } else if (useWordpress) {
    gulp.watch(
      `${resourceDirectory}/views/**/*.php`,
      series(PHP, () => {})
    )
  } else {
    gulp.watch(
      `${resourceDirectory}/views/**/*.html`,
      series(HTML, () => {})
    )
  }
  if (useEjs) {
    gulp.watch(
      `${resourceDirectory}/views/**/*.ejs`,
      series(EJS, () => {})
    )
  }
  if (useVue) {
    gulp.watch(
      `${resourceDirectory}/${esDirectory}/**/*.vue`,
      series(Script, () => {})
    )
  }
  if (useTs) {
    gulp.watch(
      `${resourceDirectory}/${esDirectory}/**/*.ts`,
      series(Script, () => {})
    )
  }
  if (useReact) {
    gulp.watch(
      `${resourceDirectory}/${esDirectory}/**/*.jsx`,
      series(Script, () => {})
    )
  }
  if (useTsx) {
    gulp.watch(
      `${resourceDirectory}/${esDirectory}/**/*.tsx`,
      series(Script, () => {})
    )
  }
  if (useVendor) {
    gulp.watch(
      `${resourceDirectory}/vendors/**/*`,
      series(Vendor, () => {})
    )
  }
  if (useAudio) {
    gulp.watch(
      `${resourceDirectory}/audios/**/*`,
      series(Audio, browserSync.reload)
    )
  }
  cb()
}

export default MainServer
