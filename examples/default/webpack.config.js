'use strict';
var path = require('path');
var HtmlReplacePlugin = require('../..');

var webpackConfig = {
  entry: {
    common: ['react'],
    index: __dirname + '/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: '[name].js'
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
