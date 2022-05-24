import { src, dest, resourceDirectory, buildDirectorySrc } from './Constants'

const Image = (cb) => {
  return src(
    `${resourceDirectory}/images/**/*.{png,jpg,gif,svg,ico,webp}`
  ).pipe(dest(`${buildDirectorySrc}/images/`))
}

export default Image
