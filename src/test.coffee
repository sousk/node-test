http = require('http')
(http.createServer (req, res)-> 
	res.writeHead 200, 'Content-Type': 'text/plain'
	res.end "hello world\n"
).listen 1337, '127.0.0.1'
console.log "running"

