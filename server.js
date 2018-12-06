var http = require('http');
var fs = require('fs');
const hostname = '0.0.0.0';
var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.use('/static', express.static('static'));

var server = http.createServer(function (req, res)
{
	if (req.url === '/')
	{
		fs.readFile('j1a_interview.html', function(err, data)
		{
			res.writeHead(200, {'Content-Type': 'text/HTML'});
			res.write(data);
			res.end();
		});
	}
	else if (req.url === '/css/j1A.css')
	{
		fs.readFile('j1A.css', function(err, data)
	{
		res.writeHead(200, {'Content-Type': 'text/CSS'});
		res.write(data);
		res.end();
	});
	}

});

server.listen(port, hostname, function()
{
	console.log('Server running at http://' + hostname + ':' + port + '/');
});