import {
  src,
  dest,
  resourceDirectory,
  buildDirectory,
  usePhp,
  useEjs,
  htmlMinify,
} from './Constants'

const HTML = (cb) => {
  if (usePhp || useEjs) {
    cb()
  } else {
    return (
      src(`${resourceDirectory}/views/**/*.html`)
        // .pipe(
        //   htmlMinify({
        //     collapseWhitespace: true,
        //     removeComments: true
        //   })
        // )
        .pipe(dest(`${buildDirectory}/`))
    )
  }
  cb()
}

export default HTML
