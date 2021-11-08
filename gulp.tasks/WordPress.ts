import {
  src,
  dest,
  resourceDirectory,
  buildDirectory,
  useWordpress
} from './Constants'

const WordPress = cb => {
  if (useWordpress) {
    return src([
      `${resourceDirectory}/setup_files/wordpress/screenshot.png`,
      `${resourceDirectory}/setup_files/wordpress/style.css`
    ]).pipe(dest(`${buildDirectory}/`))
  }
  cb()
}

export default WordPress
