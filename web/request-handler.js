var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers.js');
var fs = require('fs');
var initialize = require('./initialize.js');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  req.on('data', (chunk) => {
    var incoming = chunk.toString();
    console.log(incoming);
    console.log(incoming.slice(4));
    initialize(incoming.slice(4));
  });
  helper.serveAssets(res, 'index.html');
};