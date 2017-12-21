var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback, status) {
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {    
    // console.log(data);
    //exports.isUrlInList
    status = 200;
  });
};

exports.isUrlInList = function(url, callback) {
  //check the list
  //if it is not downloadUrls
  //else return website
};

exports.addUrlToList = function(url, callback, status) {
  //helper function calls this on success
  url = url + ' \n';
  fs.appendFile(exports.paths.list, url, (err, data) => {
  });
  status = 302;
};

exports.isUrlArchived = function(url, callback) {
  //webworkers uses this to check
};

exports.downloadUrls = function(urls) {
  //calls helper function to download
};
