import { buildDirectory, del } from './Constants'

const DeleteBuild = cb => {
  return del(buildDirectory)
}

export default DeleteBuild
