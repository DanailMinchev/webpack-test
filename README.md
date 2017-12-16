# Dependencies

| Package                      | Type          | Version       | Description                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| webpack                      | dev           | 3.8.1         | `webpack related:` webpack is module bundler. `webpack` is the main package.                                                                                                                                                                                                                                          |
| babel-core                   | dev           | 6.26.0        | `Babel related:` Babel is a JavaScript compiler. `babel-core` is babel compiler core. See: [Using Babel](https://babeljs.io/docs/setup/) [Babel's core packages](https://babeljs.io/docs/core-packages/)                                                                                                              |
| babel-preset-env             | dev           | 1.6.1         | `Babel related:` Babel preset that automatically determines the Babel plugins you need based on your supported environments. Uses [compat-table](https://github.com/kangax/compat-table). See: [Env preset](https://babeljs.io/docs/plugins/preset-env/) [Presets](https://babeljs.io/docs/plugins/#presets)          |
| babel-polyfill               | default       | 6.26.0        | `Babel related:` Babel includes a polyfill that includes a custom regenerator runtime and core-js. See: [Polyfill](https://babeljs.io/docs/usage/polyfill/)                                                                                                                                                           |
| babel-loader                 | dev           | 7.1.2         | `webpack and Babel related:` Babel loader for webpack. See: [babel-loader](https://webpack.js.org/loaders/babel-loader/)                                                                                                                                                                                              |
| css-loader                   | dev           | 0.28.7        | `webpack related:` CSS loader for webpack. Used to handle `.css` imports. See: [css-loader](https://webpack.js.org/loaders/css-loader/)                                                                                                                                                                               |
| extract-text-webpack-plugin  | dev           | 3.0.2         | `webpack related:` Extract text from a bundle, or bundles, into a separate file.  See: [ExtractTextWebpackPlugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)                                                                                                                                        |

### Installation

```sh
npm install --save-dev webpack babel-core babel-preset-env babel-loader css-loader extract-text-webpack-plugin
npm install --save babel-polyfill
```
