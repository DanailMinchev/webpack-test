// Node.js
const path = require('path')

// npm
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Constants
const VENDOR_LIBRARIES = ['babel-polyfill']

module.exports = {
  entry: {
    bundle: './src/js/app.js',
    vendor: VENDOR_LIBRARIES
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS module (applied 2nd)
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS (applied 1st)
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // Usually, it's recommended to extract the style sheets into a dedicated file in production using the ExtractTextPlugin.
    // This way your styles are not dependent on JavaScript.
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    // Extract common code into separate files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // Update the <script> tags automatically
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
