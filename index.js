"use strict";

var fs = require('fs');
var _ = require('lodash');
var Promise = require('bluebird');
var path = require('path');
var parse  =require('./lib/parser.js');

function HtmlReplacePlugin(options) {
	this.chunkVersions = [];
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
  compiler.plugin('emit',function(compilation,callback){
		// compilationPromise = childCompiler.compileTemplate(self.options.template,compiler.context, self.options.filename,compilation);
		console.log(compilation.chunks.filter);
		var changedChunks = compilation.chunks.filter(function(chunk) {
      var oldVersion = this.chunkVersions[chunk.name];
      this.chunkVersions[chunk.name] = chunk.hash;
			chunk.name = chunk.name + '.' + chunk.hash;
      return chunk.hash !== oldVersion;
    }.bind(this));
		callback();
  }.bind(this));
	compiler.plugin('after-emit',function(compilation,callback){
		console.log(compilation);
	}.bind(this));
};


module.exports = HtmlReplacePlugin;
