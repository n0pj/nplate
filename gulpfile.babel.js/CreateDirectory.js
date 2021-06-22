import { buildDirectory, src, dest } from './Constants'

const CreateDirectory = cb => {
  return src(['*.*', '!gulpfile*'], { read: false }).pipe(
    dest(`${buildDirectory}`)
  )
}

export default CreateDirectory
