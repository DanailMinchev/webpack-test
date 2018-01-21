// npm
const webpackMerge = require('webpack-merge')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')

// local
const webpackCommonConfig = require('./webpack.common.config')

module.exports = webpackMerge(webpackCommonConfig, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSWebpackPlugin({
      sourceMap: true
    })
  ]
})
