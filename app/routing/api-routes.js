var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('../data/friends.js');


module.exports = function(app){
app.post('/api/friends', function (req, res) {
	var newFriend = req.body;
	friends.push(newFriend);
	console.log(friends);
// This has to be an algorithm to decide which match
	res.json(friends[Math.floor(Math.random()*friends.length)]);
});

app.get('/api/show', function (req, res) {	
		console.log(req.params);
		res.json(friends);
});
}