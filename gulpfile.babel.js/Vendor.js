import {
  src,
  dest,
  resourceDirectory,
  buildDirectorySrc,
  useVendor
} from './Constants'

const Vendor = cb => {
  if (useVendor) {
    return src(`${resourceDirectory}/vendors/**/*`).pipe(
      dest(`${buildDirectorySrc}/vendors/`)
    )
  }
  cb()
}

export default Vendor
