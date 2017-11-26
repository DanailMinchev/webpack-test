const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/js/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
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
              loader: 'css-loader' // translates CSS into CommonJS module
            },
            {
              loader: 'sass-loader' // compiles Sass to CSS
            }
          ]
        })
      }
    ]
  },
  plugins: [
    // Usually, it's recommended to extract the style sheets into a dedicated file in production using the ExtractTextPlugin.
    // This way your styles are not dependent on JavaScript.
    new ExtractTextPlugin({
      filename: 'main.css'
    })
  ]
}
