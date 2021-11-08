import {
  src,
  webpack,
  webpackStream,
  webpackConfig,
  dest,
  gulpBabel,
  sourcemaps,
  concat,
  rename,
  uglify,
  buildDirectory,
  buildDirectorySrc,
  resourceDirectory,
  esDirectory,
  useVue,
  useNuxt,
  useNext,
  useTs,
  useTsx,
  useCompiler,
  esbuild,
  entry,
  glob,
  useESBuild
} from './Constants'

const sass = require('sass')

const sassPlugin = options => ({
  name: 'esbuild-plugin-sass',
  setup(build) {
    build.onLoad({ filter: /\.s[ac]ss$/ }, ({ path }) => {
      return new Promise(resolve => {
        sass.render({ ...options, file: path }, (err, result) => {
          resolve({
            contents: result?.css,
            loader: 'css',
            errors: err ? [{ text: err.message }] : undefined
          })
        })
      })
    })
  }
})

const Script = async cb => {
  if (useNext) {
    return cb()
  }
  const mode = process.env.NODE_ENV
  webpackConfig.mode = mode

  if (useCompiler && !useESBuild) {
    webpackStream(webpackConfig, webpack)
      .pipe(sourcemaps.init())
      // .pipe(concat('main'))
      // .pipe(gulpBabel({
      //   presets: ['@babel/preset-env']
      // }))
      // .pipe(uglify())
      // .pipe(rename({extname: '.js'}))
      // .pipe(sourcemaps.write('.'))
      .pipe(dest(`${buildDirectorySrc}/scripts`))
  }

  if (useCompiler && useESBuild) {
    const rawMode = process.env.NODE_ENV
    const isDev = rawMode == 'development'

    const files = await glob(
      `${resourceDirectory}/${esDirectory}/*.{js,jsx,ts,tsx}`
    )

    return esbuild
      .build({
        define: { 'process.env.NODE_ENV': mode },
        target: 'node14',
        entryPoints: files,
        bundle: true,
        outdir: `${buildDirectorySrc}/scripts`,
        minify: !isDev,
        sourcemap: isDev,
        plugins: [sassPlugin()]
      })
      .catch(e => {
        console.log(e)
        // process.exit(1)
      })
  } else {
    return src(`${resourceDirectory}/${esDirectory}/**/*`).pipe(
      dest(`${buildDirectorySrc}/scripts`)
    )
  }
}

export default Script
