'use strict';

var express = require('express');
var http    = require('http');

var app = express();

app.use(express.static(__dirname + '/app'));

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('Server running on port', app.get('port'));
});
