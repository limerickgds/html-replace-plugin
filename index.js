"use strict";

var fs = require('fs');
var _ = require('lodash');
var Promise = require('bluebird');
var path = require('path');

function HtmlReplacePlugin(options) {
	this.options = _.extend({
		filename: 'index.html',
		template: '',
	}, options);
}

HtmlReplacePlugin.prototype.apply = function(compiler, callback) {
	var  self = this;
	var filename  = this.options.template;
	var compilationPromise;
	if(path.resolve(filename) === path.normalize(filename)){
		this.options.filename = path.relative(compiler.options.output.path, filename);
	}
	console.log(compiler.options);
	console.log(compiler.context);
  compiler.plugin('make',function(compilation,callback){
		compilationPromise = childCompiler.compileTemplate(self.options.template,compiler.context, self.options.filename,compilation)
		callback();
  });

};

module.exports = HtmlReplacePlugin;
