import { spawn } from 'child_process'

import gulp from 'gulp'
import gulpHtmlmin from 'gulp-htmlmin'
import browserSync from 'browser-sync'
import del from 'del'
import hugoBin from 'hugo-bin'
import webpack from 'webpack'
import webpackDevelopmentConfig from './webpack.development.config'
import webpackProductionConfig from './webpack.production.config'

const browserSyncMain = browserSync.create('main')

const NODE_ENV = process.env.NODE_ENV
const IS_PRODUCTION = NODE_ENV === 'production'

export const clean = () => {
  return del(['dist', 'site/data/manifest.json'])
}

const buildWebpack = (done) => {
  const webpackConfiguration =
    IS_PRODUCTION ? webpackProductionConfig({NODE_ENV}) : webpackDevelopmentConfig({NODE_ENV})
  webpack(webpackConfiguration, (err, stats) => {
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }
    const info = stats.toJson()
    if (stats.hasErrors()) {
      console.error(info.errors)
    }
    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }
    done()
  })
}

const buildHugo = (done) => {
  const hugoBinArguments = ['-d', '../dist', '-s', 'site', '-v']
  const hugoBinChildProcess = spawn(hugoBin, hugoBinArguments, {
    stdio: 'inherit',
    shell: true
  })
  hugoBinChildProcess.on('close', (code, signal) => {
    if (code === 0) {
      done()
    } else {
      done('Hugo build error: received nonzero return code ' + code)
    }
  })
  hugoBinChildProcess.on('error', (err) => {
    done('Hugo build error: the process could not be spawned or killed')
  })
}

const htmlMinify = (done) => {
  if (IS_PRODUCTION) {
    return gulp.src('./dist/**/*.html')
      .pipe(gulpHtmlmin({
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: false,
        removeAttributeQuotes: true,
        removeRedundantAttributes: false,
        removeEmptyAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: false,
        minifyCSS: true,
        minifyJS: true,
        keepClosingSlash: false,
        sortAttributes: true,
        sortClassName: true
      }))
      .pipe(gulp.dest('./dist'))
  }
  done()
}

const serverInit = (done) => {
  browserSyncMain.init({
    server: {
      baseDir: './dist'
    }
  })
  done()
}

const serverRefresh = (done) => {
  browserSyncMain.reload()
  done()
}

export const build = gulp.series(clean, buildWebpack, buildHugo, htmlMinify)

const watch = () => {
  gulp.watch('./src', gulp.series(buildWebpack, serverRefresh))
  gulp.watch('./site', gulp.series(buildHugo, htmlMinify, serverRefresh))
}

export const start = gulp.series(build, serverInit, watch)

export default build
