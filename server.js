const hostname = '0.0.0.0';
var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('j1a_interview')
});


app.listen(port, () => {
	console.log('Listening on... ' + port);
});