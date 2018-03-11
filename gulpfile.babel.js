import gulp from 'gulp'
import browserSync from 'browser-sync'
import del from 'del'
import webpack from 'webpack'
import webpackDevelopmentConfig from './webpack.development.config'
import webpackProductionConfig from './webpack.production.config'

const browserSyncMain = browserSync.create('main')

const NODE_ENV = process.env.NODE_ENV
const IS_PRODUCTION = NODE_ENV === 'production'

export const clean = () => {
  return del(['dist'])
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

const serverInit = (done) => {
  browserSyncMain.init({
    server: {
      baseDir: './dist'
    }
  })
  done()
}

const serverRefresh = (done) => {
  browserSyncMain.reload();
  done();
}

export const build = gulp.series(clean, gulp.parallel(buildWebpack))

const watch = () => {
  gulp.watch('./src', gulp.series(buildWebpack, serverRefresh));
}

export const start = gulp.series(build, gulp.parallel(watch, serverInit))

export default build
