import {
  src,
  dest,
  resourceDirectory,
  buildDirectorySrc,
  useAudio
} from './Constants'

const Audio = cb => {
  if (useAudio) {
    return src(`${resourceDirectory}/audios/**/*`).pipe(
      dest(`${buildDirectorySrc}/audios/`)
    )
  }
  cb()
}

export default Audio
