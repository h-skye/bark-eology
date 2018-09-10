const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const fetchPromise = require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
const dbController = require('./../../db/dbController.js');
const server = require('./serverRouting.js');

app.use(function(req, res, next) { 
	res.header('Access-Control-Allow-Origin', '*'); 
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
	next(); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './../../dist')));

app.post('/signup', dbController.createTable, dbController.verifyUser, dbController.createUser, (err, res) => {
	// console.log('am i hitting next?');
	if (res.locals.doesExist === true) {
		res.redirect('/');
	} else if (res.locals.doesExist === false) { 
		res.send('User created! You may login now');
	} else {
		console.log('error in creating user in DB', err);
	}
});

app.post('/login', dbController.verifyUser, (err, res) => {
	console.log('hitting login page');
	if (res.locals.doesExist === true) {
		res.redirect('/userPage');
	} else if (res.locals.doesExist === false) {
		res.send('Create a new user!');
	} else {
		console.log('error login in!', err);
	}
});


app.listen(3000, (err) => {
	if (err) console.log('Error in server starting', err);
	else console.log('Borking on port 3000!');
});