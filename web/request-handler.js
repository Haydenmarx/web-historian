var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers.js');
var fs = require('fs');
var initialize = require('./initialize.js');
var url = require('url');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var status = 200;
  const {method, url, data} = req;
  req.on('data', (chunk) => {
    var incoming = chunk.toString();
    if (method === 'GET') {
      archive.readListOfUrls();
    } else if (method === 'POST') {
      archive.addUrlToList(incoming.slice(4), status);
    }
  });
  helper.serveAssets(res, 'index.html', status);
};





// var methods = {
  
//   GET: function(req, res) {
//     fs.readFile(archive.readListOfUrls(), )
//   },
//   POST: function(req, res) {
    
//   }
// };

// exports.handleRequest = function (req, res) {
//   if (methods[req.method]) {
//     methods[req.method](req, res);
//   }
// };