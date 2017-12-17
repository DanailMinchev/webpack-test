# Dependencies

| Package                      | Type          | Version       | Description                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rimraf                       | dev           | 2.6.2         | A `rm -rf` util for Node.js.                                                                                                                                                                                                                                                                                          |
| webpack                      | dev           | 3.8.1         | `webpack related:` webpack is module bundler. `webpack` is the main package.                                                                                                                                                                                                                                          |
| webpack-dev-server           | dev           | 2.9.4         | `webpack related:` webpack dev server.                                                                                                                                                                                                                                                                                |
| babel-core                   | dev           | 6.26.0        | `Babel related:` Babel is a JavaScript compiler. `babel-core` is babel compiler core. See: [Using Babel](https://babeljs.io/docs/setup/) [Babel's core packages](https://babeljs.io/docs/core-packages/)                                                                                                              |
| babel-preset-env             | dev           | 1.6.1         | `Babel related:` Babel preset that automatically determines the Babel plugins you need based on your supported environments. Uses [compat-table](https://github.com/kangax/compat-table). See: [Env preset](https://babeljs.io/docs/plugins/preset-env/) [Presets](https://babeljs.io/docs/plugins/#presets)          |
| babel-polyfill               | default       | 6.26.0        | `Babel related:` Babel includes a polyfill that includes a custom regenerator runtime and core-js. See: [Polyfill](https://babeljs.io/docs/usage/polyfill/)                                                                                                                                                           |
| babel-loader                 | dev           | 7.1.2         | `webpack and Babel related:` Babel loader for webpack. See: [babel-loader](https://webpack.js.org/loaders/babel-loader/)                                                                                                                                                                                              |
| node-sass                    | dev           | 4.7.2         | `Sass related:` Node.js bindings to libsass. See: [LibSass](http://sass-lang.com/libsass) [node-sass](https://github.com/sass/node-sass)                                                                                                                                                                              |
| sass-loader                  | dev           | 6.0.6         | `webpack and Sass related:` Loads a SASS/SCSS file and compiles it to CSS. See: [sass-loader](https://webpack.js.org/loaders/sass-loader/)                                                                                                                                                                            |
| css-loader                   | dev           | 0.28.7        | `webpack and Sass/CSS related:` CSS loader for webpack. Used to handle `.css` imports. See: [css-loader](https://webpack.js.org/loaders/css-loader/)                                                                                                                                                                  |
| extract-text-webpack-plugin  | dev           | 3.0.2         | `webpack related:` Extract text from a bundle, or bundles, into a separate file.  See: [ExtractTextWebpackPlugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)                                                                                                                                        |
| html-webpack-plugin          | dev           | 2.30.1        | `webpack related:` The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.  See: [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)                                                                                                                              |

### Installation

```bash
npm install --save-dev rimraf webpack webpack-dev-server babel-core babel-preset-env babel-loader node-sass sass-loader css-loader extract-text-webpack-plugin html-webpack-plugin
npm install --save babel-polyfill
```
