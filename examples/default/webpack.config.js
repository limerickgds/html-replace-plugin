'use strict';
var path = require('path');
var HtmlReplacePlugin = require('../..');

var webpackConfig = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlReplacePlugin({
      filename: './dist/index.html',
      template: './index.html'
    })
  ]
};

module.exports = webpackConfig;
