// npm
const webpackMerge = require('webpack-merge')

// local
const webpackCommonConfig = require('./webpack.common.config')

module.exports = webpackMerge(webpackCommonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
})
