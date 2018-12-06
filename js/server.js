
var http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 300;

http.createServer(function (req, res)
{
	fs.readFile('j1a_interview.html', function(err, data)
	{
		res.writeHead(200, {'Content-Type', 'text/HTML'});
		res.write(data);
		res.end();
	});

});

server.listen(port, hostname, function()
{
	console.log('Server running at http://' + hostname + ':' + port + '/');
});