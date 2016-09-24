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


// ACCEPTS GET RESPONSE FROM SURVEY.HTML
app.get('/api/friends', function (req, res) {	
// ADD THE CONTENTS OF YOUR MODAL HERE
		res.json("YOU WORK");
	
});

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});