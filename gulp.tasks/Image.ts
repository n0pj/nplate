import {
  src,
  dest,
  imagemin,
  pngquant,
  mozjpeg,
  resourceDirectory,
  buildDirectorySrc
} from './Constants'

const Image = cb => {
  return src(`${resourceDirectory}/images/**/*.{png,jpg,gif,svg,ico}`)
    .pipe(
      imagemin([
        pngquant({
          quality: [0.65, 0.8],
          speed: 1,
          floyd: 0
        }),
        mozjpeg({
          quality: 80,
          progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng()
        // imagemin.gifsicle()
      ])
    )
    .pipe(dest(`${buildDirectorySrc}/images/`))
}

export default Image
