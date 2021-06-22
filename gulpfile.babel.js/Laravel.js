import {
  src,
  dest,
  webpackConfig,
  uglify,
  rename,
  webpackStream,
  webpack,
  plumber,
  notify,
  concat,
  resourceDirectory,
  buildDirectory,
  buildDirectorySrc,
  useWordpress,
  useLaravel,
  useLaravelStorage,
} from './Constants'
import { execSync } from 'child_process'

const Laravel = (cb) => {
  if (!useLaravel) return cb()

  if (useLaravelStorage) {
    const stdout = execSync(
      'docker exec php bash -c "php artisan storage:link"'
    )
    // console.log(stdout.toString())
  }

  src([
    `${resourceDirectory}/setup_files/laravel/*`,
    `${resourceDirectory}/setup_files/laravel/.*`,
  ]).pipe(dest(`${buildDirectory}/`))
  return cb()
}

export default Laravel
