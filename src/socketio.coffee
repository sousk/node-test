http = require('http')
fs = require('fs')
sys = require('sys')
socket = require('socket.io')

server = http.createServer (req, res)->
	res.writeHead 200, 'Content-Type': 'text/html'
	
	rs = fs.createReadStream __dirname + '/../www/socketio.html'
	sys.pump rs, res

sock = socket.listen server
sock.on 'connection', (client)->
	console.log 'client connected'

((port)->
	server.listen port
	console.log 'server running at '+port
	console.log __dirname
)(3000)
