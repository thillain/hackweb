#!/usr/bin/env node
/**
 *
 *Will serve files and additionally provide a server sent event (SSE) stream.
 *
 *Thanks to https://github.com/matthiasn/live-html5
 *
 **/

'use strict';
 var http  = require("http"),
     chok  = require('chokidar'),
     SSE   = require('sse'),
     url   = require("url"),
     path  = require("path"),
     fs    = require("fs"),
     port  = process.argv[2] || 8888;


var clients = [];
var watcher = chok.watch(process.cwd(), { ignored: /bower_components+/, persistent: true });
watcher.on('change', function (path) {
    clients.forEach(function(client) { client.send(path); }); // send path of changed file
});


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");