"use strict";

var fs = require('fs');
var _ = require('lodash');
var path = require('path');

function HtmlResWebpackPlugin(options) {
	this.options = _.extend({

		template: '',
	}, options);
}

HtmlResWebpackPlugin.prototype.apply = function(compiler, callback) {
	let _this = this;
  compiler.plugin('',function(){

  });
};

module.exports = HtmlResWebpackPlugin;
