// Node.js
const path = require('path')

// npm
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Constants
const VENDOR_LIBRARIES = ['babel-polyfill']

// Initialisation and global variables
const extractSaas = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

module.exports = {
  target: 'web',
  entry: {
    bundle: './src/js/app.js',
    vendor: VENDOR_LIBRARIES
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
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
        use: extractSaas.extract({
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
    // Allow global constants configured at compile time
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // Extract common code into separate files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // Usually, it's recommended to extract the style sheets into a dedicated file
    // in production using the ExtractTextPlugin.
    // This way your styles are not dependent on JavaScript.
    extractSaas,
    // Update the <script> and <link> tags automatically
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      xhtml: false,
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
