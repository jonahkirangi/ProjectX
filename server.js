'use strict';

var express = require('express');
var http    = require('http');
var mongoose = require('mongoose');
var fs = require('fs');

var app = express();

var db = mongoose.createConnection('localhost', 'projectx');

var index;
fs.readFile(__dirname + '/app/index.html', function(error, content) {
  if(error) throw error;
  index = content;
});
app.use(express.static(__dirname + '/app'));
app.use(function(request, response) {
  response.end(index);
});

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('Server running on port', app.get('port'));
});
