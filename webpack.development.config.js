// npm
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// local
const webpackCommonConfig = require('./webpack.common.config')

module.exports = webpackMerge(webpackCommonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // Update the <script> and <link> tags automatically
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      xhtml: false,
      minify: {
        collapseWhitespace: false
      }
    })
  ]
})
