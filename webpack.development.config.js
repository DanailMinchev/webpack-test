// npm
const webpackMerge = require('webpack-merge')

// local
const webpackCommonConfig = require('./webpack.common.config')

module.exports = env => {
  return webpackMerge(webpackCommonConfig(env), {
    devtool: 'inline-source-map',
    plugins: [
    ]
  })
}
