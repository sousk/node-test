(function() {
  var http;
  http = require('http');
  (http.createServer(function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    return res.end("hello world\n");
  })).listen(1337, '127.0.0.1');
  console.log("running");
}).call(this);
