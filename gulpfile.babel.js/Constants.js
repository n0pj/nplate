export const gulp = require('gulp')
export const gulpConnectPhp = require('gulp-connect-php')
export const { parallel, series, src, dest, task } = require('gulp')
export const browserSync = require('browser-sync')
export const sass = require('sass')
export const autoprefixer = require('gulp-autoprefixer')
export const plumber = require('gulp-plumber')
export const notify = require('gulp-notify')
export const gulpStylelint = require('stylelint')
export const concat = require('gulp-concat')
export const rename = require('gulp-rename')
export const uglify = require('gulp-uglify')
export const gulpBabel = require('gulp-babel')
export const gulpIf = require('gulp-if')
export const del = require('del')
export const rimraf = require('rimraf')
export const htmlMinify = require('gulp-htmlmin')
export const fileInclude = require('gulp-file-include')
export const cssMinify = require('gulp-clean-css')
export const wait = require('gulp-wait')
// export const glob = require('glob')
export const fs = require('fs')
export const open = require('opn')
export const gulpEjs = require('gulp-ejs')
export const styleCache = require('gulp-cached')
export const progeny = require('gulp-progeny')
export const sassGlob = require('gulp-sass-glob')
export const tildeImporter = require('node-sass-tilde-importer')
export const esbuild = require('esbuild')
export const glob = require('tiny-glob')

// load config module
import YAML from 'yaml'

const CONFIG_FILE = fs.readFileSync('./config.yaml', 'utf8')
const CONFIG = YAML.parse(CONFIG_FILE)

export const buildDirectorySrc = `${CONFIG['build_name']}/src`
export const buildDirectory = `${CONFIG['build_name']}`

// internal server
const serverSettings = CONFIG['server_settings']
const serverUseProps = serverSettings['use']
export const host = `${serverSettings['host']}`
export const browsersyncPort = serverSettings['browsersync_port']
export const proxyPort = serverSettings['proxy_port']
export const useProxy = serverUseProps['proxy']
export const useHtaccess = serverUseProps['htaccess']

// ecmascript
export const esDirectory = CONFIG['ecmascript_settings']['ecmascript_directory']
const esUseProps = CONFIG['ecmascript_settings']['use']
export const useVue = esUseProps['vue']
export const useNuxt = esUseProps['nuxt']
export const useReact = esUseProps['react']
export const useNext = esUseProps['next']
export const useTs = esUseProps['ts']
export const useTsx = esUseProps['tsx']
export const useEjs = esUseProps['ejs']
export const useScriptMinify = esUseProps['minify']
export const useCompiler = esUseProps['compiler']
export const useESBuild = esUseProps['esbuild']

// style
const styleSettings = CONFIG['style_settings']
const styleUseProps = styleSettings['use']
export const styleDirectory = styleSettings['style_directory']
export const useStyleEntry = styleUseProps['entry']
export const useCSSMinify = styleUseProps['minify']

// php
const phpUseProps = CONFIG['php_settings']['use']
export const usePhp = phpUseProps['php']
export const useBladeTemplate = phpUseProps['blade_template']
export const useLaravel = phpUseProps['laravel']
export const phpBin = CONFIG['php_settings']['php_bin']
export const phpIni = CONFIG['php_settings']['php_ini']

// wordpress
const wordpressSettings = CONFIG['wordpress_settings']
const wordpressUseProps = wordpressSettings['use']
export const useWordpress = wordpressUseProps['as_wordpress_theme']
export const serverPort = CONFIG['server_port']
export const resourceDirectory = CONFIG['resource_directory']

// vendor
export const useVendor = CONFIG['vendor_settings']['use']['vendors_directory']

// audio
export const useAudio = CONFIG['audio_settings']['use']['audios_directory']

// next.js
export const express = require('express')
export const port = parseInt(process.env.PORT || '3004', 10)
