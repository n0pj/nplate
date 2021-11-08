import {
  src,
  dest,
  resourceDirectory,
  buildDirectory,
  usePhp,
  htmlMinify,
  useLaravel,
  useWordpress
} from './Constants'

const PHP = cb => {
  if (useLaravel) {
    return cb()
  } else if (usePhp || useWordpress) {
    return (
      src(`${resourceDirectory}/views/**/*.php`)
        // .pipe(htmlMinify({
        //   collapseWhitespace : true,
        //   removeComments : true
        // }))
        .pipe(dest(`${buildDirectory}/`))
    )
  }
  cb()
}

export default PHP
