var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, status, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  fs.readFile(path.join(archive.paths.siteAssets, asset), 'utf8', (err, data) => {
    res.writeHead(status, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
};



// As you progress, keep thinking about what helper functions you can put here!

var getWebsite = function(website) {
  //get request from website
  //return website data
  $.get(website, function(data) {
    console.log(data);
  });
};