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
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
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
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/index.html'
    })
  ]
};

module.exports = webpackConfig;
