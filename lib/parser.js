var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Promise = require('bluebird');

function parserTemplate(template, context, outputFilename, compilation){
  var outputOptions = {
    filename: outputFilename,
    publicPath: compilation.outputOptions.publicPath
  };
}


module.exports = {
  parserTemplate: parserTemplate
};
