var Webpack = require('webpack');

var webpackConfig = require('./examples/default/webpack.config.js');


var webpack = new Webpack(webpackConfig,function(err){

});
