import { src, dest, resourceDirectory, useNext } from './Constants'

const Next = cb => {
  if (useNext) {
    return src([`${resourceDirectory}/setup_files/next.js/**/*`]).pipe(
      dest('./', { overwrite: false })
    )
  }
  cb()
}

export default Next
