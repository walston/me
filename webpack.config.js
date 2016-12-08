const webpack = require('webpack');

let ReactLoader = {
  test: /\.(jsx|js)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    presets: ['es2016', 'react']
  }
}

module.exports = {
  entry: './ecma/index.js',
  output: {
    filename: 'script.js',
    path: __dirname
  },
  module: {
    loaders: [
      ReactLoader
    ]
  }
}
