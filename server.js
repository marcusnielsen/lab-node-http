var http = require('http');

var server = http.createServer(function onCreateServer(req, res) {
  if(req.url === '/hello') {
    return res.end('Hello world!');
  }

  res.end('Other routes not handled. Please try "/hello".');
});

var port = process.env.PORT || 3000;

server.listen(port, function onListen() {
  console.log('Server started on port: ' + port);
});
