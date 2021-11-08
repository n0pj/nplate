import {
  src,
  dest,
  resourceDirectory,
  buildDirectory,
  useHtaccess
} from './Constants'

const Htaccess = cb => {
  if (useHtaccess) {
    return src(`${resourceDirectory}/views/.htaccess`).pipe(
      dest(`${buildDirectory}/`)
    )
  }
  cb()
}

export default Htaccess
