// Node.js
const path = require('path')

// npm
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Constants
const VENDOR_LIBRARIES = [
  'babel-polyfill',
  'lodash'
]

// Initialisation and global variables
const extractSaas = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
})

module.exports = env => {
  const IS_PRODUCTION = env.NODE_ENV === 'production'

  return {
    target: 'web',
    entry: {
      vendor: VENDOR_LIBRARIES,
      bundle: './src/js/index.js'
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
          exclude: /node_modules/,
          use: extractSaas.extract({
            use: [
              {
                loader: 'css-loader', // translates CSS into CommonJS module (applied 2nd)
                options: {
                  sourceMap: true,
                  minimize: IS_PRODUCTION
                }
              },
              {
                loader: 'sass-loader', // compiles Sass to CSS (applied 1st)
                options: {
                  sourceMap: true,
                  includePaths: ['node_modules/foundation-sites/scss']
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      // Shimming
      new webpack.ProvidePlugin({
        $: 'jquery',
        'window.$': 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
      // Update the <script> and <link> tags automatically
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        xhtml: false,
        minify: {
          collapseWhitespace: IS_PRODUCTION
        }
      }),
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
}
