(function() {
  var fs, http, server, sock, socket, sys;
  http = require('http');
  fs = require('fs');
  sys = require('sys');
  socket = require('socket.io');
  server = http.createServer(function(req, res) {
    var rs;
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    rs = fs.createReadStream(__dirname + '/../www/socketio.html');
    return sys.pump(rs, res);
  });
  sock = socket.listen(server);
  sock.on('connection', function(client) {
    return console.log('client connected');
  });
  (function(port) {
    server.listen(port);
    console.log('server running at ' + port);
    return console.log(__dirname);
  })(3000);
}).call(this);
