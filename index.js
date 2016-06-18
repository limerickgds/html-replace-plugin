"use strict";

// var fs = require('fs');
var _ = require('lodash');
var path = require('path');

function HtmlReplacePlugin(options) {
	this.options = _.extend({
		template: '',
	}, options);
}

HtmlReplacePlugin.prototype.apply = function(compiler, callback) {
	let _this = this;
  compiler.plugin('emit',function(compilation,callback){
		callback();
  });

};

module.exports = HtmlReplacePlugin;
