// npm
const webpackMerge = require('webpack-merge')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')

// local
const webpackCommonConfig = require('./webpack.common.config')

module.exports = env => {
  return webpackMerge(webpackCommonConfig(env), {
    devtool: 'source-map',
    plugins: [
      // UglifyJS is a JavaScript parser, minifier, compressor and beautifier toolkit
      new UglifyJSWebpackPlugin({
        sourceMap: true
      })
    ]
  })
}
