import {
  src,
  dest,
  plumber,
  sourcemaps,
  sass,
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

const baseDir = `${resourceDirectory}/${styleDirectory}`
const Style = (cb) => {
  if (useStyleEntry) {
    return (
      src(`${baseDir}/*.scss`)
        .pipe(sassGlob())
        .pipe(progeny())

        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write({ includeContent: false }))

        .pipe(sass({ outputStyle: 'expanded', importer: tildeImporter }))
        .pipe(styleCache('style'))

        .on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(
          gulpStylelint({
            reporters: [
              {
                formatter: 'verbose',
                console: true,
              },
            ],
            syntax: 'scss',
            fix: true,
          })
        )
        .pipe(gulpIf(useCSSMinify, cssMinify()))
        .pipe(sourcemaps.write('.'))

        // .pipe(styleCache('style'))
        .pipe(dest(`${buildDirectorySrc}/styles/`))
    )
  } else {
    return src(`${baseDir}/**/*.scss`)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(
        gulpStylelint({
          reporters: [
            {
              formatter: 'verbose',
              console: true,
            },
          ],
          syntax: 'scss',
          fix: true,
        })
      )
      .pipe(plumber())
      .pipe(sass({ outputStyle: 'expanded', importer: tildeImporter }))
      .on('error', sass.logError)
      .pipe(sourcemaps.write({ includeContent: false }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(autoprefixer())
      .pipe(gulpIf(useCSSMinify, cssMinify()))

      .pipe(concat('main.css'))
      .pipe(sourcemaps.write('.'))

      .pipe(dest(`${buildDirectorySrc}/styles/`))
  }
}

export default Style
