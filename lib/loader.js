'use strict';
var _ = require('lodash');
var loaderUtils = require("loader-utils");


module.exports = function (content) {
  this.cacheable && this.cacheable();
  if(!this.emitFile) throw new Error("emitFile is required from module system");
  if(/\.js$/.test(this.request)){
    return content;
  }
  this.loaders.some(function (loader) {return (loader.module || loader.normal) === module.exports;}) && return content;
  var query = loaderUtils.parseQuery(this.query);
  // var url = loaderUtils.interpolateName(this, query.name || "[hash].[ext]", {
	// 	context: query.context || this.options.context,
	// 	content: content,
	// 	regExp: query.regExp
	// });
	// return 'module.exports = function(tempalteParams){'+
  //
  //   ''  +
  //   '}';
  return content;
};
