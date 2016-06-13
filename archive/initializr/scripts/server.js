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
/*
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
*/

/** basic web server, serving static files */

var server = http.createServer(function(request, response) {
	var uri = url.parse(request.url).pathname
	, filename = path.join(process.cwd(), uri);
	var now = new Date();
	var dateAndTime = now.toUTCString();
	var stream = fs.createWriteStream('machine.log', {
		'flags': 'a+',
		'encoding': 'utf8'
	});
	path.exists(filename, function(exists) {
		if(!exists) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.end();
			return;
		}

		if (fs.statSync(filename).isDirectory()) filename += 'index.html';

		fs.readFile(filename, "binary", function(err, file) {
			if(err) {        
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.write(err + "\n");
				response.end();
				return;
			}

			response.writeHead(200);
			response.write(file, "binary");
			
			stream.write(dateAndTime + " ", 'utf8');
			stream.write(request.headers['user-agent'] + "\n", 'utf8');
			stream.write(request.connection.remoteAddress + ": ", 'utf8')
			stream.write(request.method + " ", 'utf8')
			stream.write(request.url + "\n", 'utf8');
			stream.end();
			response.end();
		});
	});
});


/** wraps basic web server in an SSE connection over which file system changes are broadcast */
server.listen(parseInt(port, 10), function () {
	var sse = new SSE(server);
    sse.on('connection', function (client) { // register watcher when connection starts
    	clients.push(client);
    });
});

/** Log module **/

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
