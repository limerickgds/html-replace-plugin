"use strict";

var fs = require('fs');
var _ = require('lodash');
var Promise = require('bluebird');
var path = require('path');
var parser  =require('./lib/parser.js');
var async = require('async');

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
	var isCompilationCached = false;
	var compilationPromise;
	compiler.plugin('make', function (compilation,callback) {
		compilationPromise = parser.parserTemplate(self.options.template, compiler.context, self.options.filename, compilation)
      .catch(function (err) {
         console.log(err);
        return {
          content: 'ERROR',
          outputName: self.options.filename
        };
      })
      .then(function (compilationResult) {
        // If the compilation change didnt change the cache is valid
        isCompilationCached = compilationResult.hash && self.childCompilerHash === compilationResult.hash;
        self.childCompilerHash = compilationResult.hash;
        self.childCompilationOutputName = compilationResult.outputName;
        callback();
        return compilationResult.content;
      });
	});
  compiler.plugin('emit',function(compilation,callback){
		// compilationPromise = childCompiler.compileTemplate(self.options.template,compiler.context, self.options.filename,compilation);
		console.log('emit');
		var changedChunks = compilation.chunks.filter(function(chunk) {
      var oldVersion = this.chunkVersions[chunk.name];
      this.chunkVersions[chunk.name] = chunk.hash;
			chunk.name = chunk.name + '.' + chunk.hash;
      return chunk.hash !== oldVersion;
    }.bind(this));
		callback();
  }.bind(this));
	compiler.plugin('after-emit',function(compilation,callback){
		console.log('after-emit');
	}.bind(this));
};


module.exports = HtmlReplacePlugin;
