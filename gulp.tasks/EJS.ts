import {
  src,
  dest,
  resourceDirectory,
  buildDirectory,
  useEjs,
  rename,
  gulpEjs
} from './Constants'

const EJS = cb => {
  if (useEjs) {
    return src(`${resourceDirectory}/views/**/*.ejs`)
      .pipe(gulpEjs())
      .pipe(rename({ extname: '.html' }))
      .pipe(dest(`${buildDirectory}/`))
  } else {
    cb()
  }
  cb()
}

export default EJS
