var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers.js');
var fs = require('fs');
var initialize = require('./initialize.js');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var status = 200;
  const {method, url, data} = req;
  req.on('data', (chunk) => {
    var incoming = chunk.toString();
    if (method === 'GET') {
      archive.readListOfUrls(status);
    } else if (method === 'POST') {
      archive.addUrlToList(incoming.slice(4), status);
    }
  });
  helper.serveAssets(res, 'index.html', status);
};