var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = 7015;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var characters = [{
	routeName: 'yoda',
	name: 'Yoda',
	role: 'Jedi Master',
	age: 900,
	forcePoints: 2000
}, {
	routeName: 'darthmaul',
	name: 'Darth Maul',
	role: 'Sith Lord',
	age: 200,
	forcePoints: 1200
}, {
	routeName: 'obiwankenobi',
	name: 'Obi Wan Kenobi',
	role: 'Jedi Master',
	age: 55,
	forcePoints: 1350
}];



// DIFFERENT JS FILE
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/survey.html', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/survey.html'));
});




// THIS FUNCTION WILL SHOW ALL POSSIBLE DATES
app.get('/api/show', function (req, res) {	
		console.log(req.params);
		res.json(characters);
});



// OK SO I SOLVED THE PROBLEM OF GETTING THE RESPONSE 
app.post('/api/friends', function (req, res) {
	var newfriend = req.body;
	console.log(newfriend);
	res.json(characters[1]);
});





app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});