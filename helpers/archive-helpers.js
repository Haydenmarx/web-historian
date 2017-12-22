var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = ('request-handler');


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

exports.readListOfUrls = function(callback) {
  // console.log(exports.paths.list);
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {    
    if (err) {
      console.log('err', err);
    } else {
      return data;
      //goto isUrlInList
      //there data.indexOf(search)
      //if -1 archive website
      //else return website
    }
 
    //exports.isUrlInList
  });
};

exports.isUrlInList = function(url, callback) {
  //check the list
  //if it is not downloadUrls
  //else return website
};

exports.addUrlToList = function(url, callback) {
  url = url + '\n';
  fs.appendFile(exports.paths.list, url, (err, data) => {
    if (err) {
      throw err;
    }
  });
};

exports.isUrlArchived = function(url, callback) {
  if (fs.existsSync(exports.paths.archivedSites + '/' + url)) {
    return true;
  }
  return false;
  //webworkers uses this to check
};

exports.downloadUrls = function(urls) {
  //calls helper function to download
};
