// npm
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')

// local
const webpackCommonConfig = require('./webpack.common.config')

module.exports = webpackMerge(webpackCommonConfig, {
  devtool: 'source-map',
  plugins: [
    // Update the <script> and <link> tags automatically
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      xhtml: false,
      minify: {
        collapseWhitespace: true
      }
    }),
    // UglifyJS is a JavaScript parser, minifier, compressor and beautifier toolkit
    new UglifyJSWebpackPlugin({
      sourceMap: true
    })
  ]
})
