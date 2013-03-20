var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"};


function requestHandler(req, res) {
  res.writeHead(200, {
    'Connection': 'close',
    'Content-Type': 'text/plain',
    'Content-Length': body.length
  });
  res.end(body);

}

var server = http.createServer(requestHandler);

server.listen(5000, function() {
  console.log('Listening to port ' + server.address().port);
});