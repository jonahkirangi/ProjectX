'use strict';

var express = require('express');
var http    = require('http');
var mongoose = require('mongoose');

var app = express();

var db = mongoose.createConnection('localhost', 'projectx');

app.use(express.static(__dirname + '/app'));

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('Server running on port', app.get('port'));
});
