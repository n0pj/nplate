import Config from './Config'
import { useScriptMinify } from './gulpfile.babel.js/Constants'
const buildDirectorySrc = `${Config['template_name']}/src`
const resourceDirectory = `${Config['resource_directory']}`
const esDirectory = `${Config['ecmascript_settings']['ecmascript_directory']}`
// const {VueLoaderPlugin} = require('vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const entry = require('webpack-glob-entry')
const mode = process.env.NODE_ENV

module.exports = {
  mode,
  plugins: [new VueLoaderPlugin()],
  entry: entry(
    `${resourceDirectory}/${esDirectory}/*.js`,
    `${resourceDirectory}/${esDirectory}/*.jsx`,
    `${resourceDirectory}/${esDirectory}/*.ts`,
    `${resourceDirectory}/${esDirectory}/*.tsx`
  ),
  output: {
    path: `${__dirname}/${buildDirectorySrc}/${esDirectory}`,
    filename: '[name].js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.ts', '.tsx', '.vue', '.js', '.jsx'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.vue$/,
        // exclude: /node_modules/,
        use: [
          'eslint-loader',
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'babel-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader'
          // options: {
          //   limit: 100000,
          //   name: '[name].[ext]'
          // }
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: 'initial'
    },
    minimize: useScriptMinify
  }
}
