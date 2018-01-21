// Node.js
const path = require('path')

// npm
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Constants
const VENDOR_LIBRARIES = ['babel-polyfill']

// Initialisation and global variables
const extractSaas = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

module.exports = {
  target: 'web',
  entry: {
    bundle: './src/js/index.js',
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
    // This plugin will cause hashes to be based on the relative path of the module,
    // generating a four character string as the module id.
    // Suggested for use in production.
    new webpack.HashedModuleIdsPlugin(),
    // Extract common code into separate files
    new webpack.optimize.CommonsChunkPlugin({
      // Note that order matters here.
      // The 'vendor' must be included prior to the 'manifest'.
      names: ['vendor', 'manifest']
    }),
    // Usually, it's recommended to extract the style sheets into a dedicated file
    // in production using the ExtractTextPlugin.
    // This way your styles are not dependent on JavaScript.
    extractSaas
  ]
}
