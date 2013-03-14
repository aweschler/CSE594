var http    = require('http');
var fs      = require('fs');

var indexPage,
    image;

fs.readdir('accesstest', function(err, files) { 
  if(err instanceof Error) throw err;
  for(var i = 0; i < files.length; ++i) {
    console.log(files[i]);
  }
});

fs.readFile('accesstest/index.html', function(err, data) {
  if(err instanceof Error) throw err;
  indexPage = data;
});

fs.readFile('accesstest/penguindance.gif', function(err, data) {
  if(err instanceof Error) throw err;
  image = data;
});

function requestHandler(req, res) {
  if(req.url === '/') {
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'text/html',
      'Content-Length': indexPage.length
    });
    res.end(indexPage);
  } else if(req.url === '/penguindance.gif') {
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'image/jpg',
      'Content-Length': image.length
    });
    res.end(image);
  }
};

var server = http.createServer(requestHandler);

server.listen(5000, function() {
  console.log('Listening to port ' + server.address().port);
});

