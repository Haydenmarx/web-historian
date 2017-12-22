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





var methods = {
  
  GET: function(req, res) {
    // if (req)
    //loading index.html
    //also loading loading.html
    //or loading archived pages
    //return boolean
    // fs.readFile(archive.readListOfUrls(), )
    
    //obj[req.url]
    //serve ./sites/google.com.html
    
    if (req.url === '/' || req.url === '/styles.css' || req.url === '/favicon.ico') {
      status = 200;
      helper.serveAssets(res, 'index.html', status);
    } else {
      status = 404;
      helper.serveAssets(res, 'index.html', status);
    }
  },
  POST: function(req, res) {
    req.on('data', (chunk) => {
      var pathName = chunk.toString().slice(4);
      fs.readFile(archive.paths.list, 'utf8', (err, data) => {    
        if (err) {
          console.log('err', err);
        } else {
          data = data.split('\n');
          status = 302;
          if (data.indexOf(pathName) === -1) {
            archive.addUrlToList(pathName);
            helper.serveAssets(res, 'loading.html', status);
          } else {
            helper.serveAssets(res, 'beingLoaded.html', status);
          }
        }
      });
    });
  }
};

exports.handleRequest = function (req, res) {
  const {method, url, data} = req;
  if (methods[method]) {
    methods[method](req, res);
  }
};


{
  //all my urls
}


/*
Method: POST . Url:  /  .  true
Method: GET . Url:  /styles.css  .  false
Method: GET . Url:  /favicon.ico  .  false



methods = {
  'POST': function() {
  },
  'GET': function() {
    console.log(url);
    status = 200;
    helper.serveAssets(res, 'index.html', status);
    helper.serveAssets(res, 'index.html', status);
  }
};

  var status = 200;
  const {method, url, data} = req;
  methods[method];
  
  */