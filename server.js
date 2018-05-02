const express = require('express');
const app = express();

app.get('/userform', function(req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.end(JSON.stringify(response));
	res.sendFile(__dirname + '/assets/index.html');
});

app.use(express.static('assets'));

const server = app.listen(3000, 'localhost', function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
