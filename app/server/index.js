'use strict';

let http = require('http');

let server = http.createServer((req, res) => {
  if(req.url === '/hello') {
    return res.end('Hello world!');
  }

  res.end('Other routes not handled. Please try "/hello".');
});

let port = process.env.PORT;

server.listen(port, () => console.log('Server started on port: ' + port) );
