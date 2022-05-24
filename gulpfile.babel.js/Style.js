import {
  src,
  dest,
  plumber,
  autoprefixer,
  gulpStylelint,
  concat,
  resourceDirectory,
  buildDirectorySrc,
  cssMinify,
  styleDirectory,
  useStyleEntry,
  styleCache,
  progeny,
  sassGlob,
  tildeImporter,
  useCSSMinify,
  gulpIf,
} from './Constants'

const sass = require('gulp-sass')(require('sass'))

const baseDir = `${resourceDirectory}/${styleDirectory}`
const Style = (cb) => {
  return (
    src(`${baseDir}/*.scss`)
      .pipe(sassGlob())
      .pipe(progeny())

      .pipe(sass({ outputStyle: 'expanded', importer: tildeImporter }))
      .pipe(styleCache('style'))

      .on('error', sass.logError)
      // .pipe(autoprefixer())
      // .pipe(
      //   gulpStylelint({
      //     reporters: [
      //       {
      //         formatter: 'verbose',
      //         console: true,
      //       },
      //     ],
      //     syntax: 'scss',
      //     fix: true,
      //   })
      // )
      .pipe(gulpIf(useCSSMinify, cssMinify()))

      // .pipe(styleCache('style'))
      .pipe(dest(`${buildDirectorySrc}/styles/`))
  )
}

export default Style
