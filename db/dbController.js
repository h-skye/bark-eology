const db = require ('./db');

const dbController = {};

dbController.createTable = ((req, res, next) => {
	// console.log('request body in create table', req.body);

	return db.query(`CREATE TABLE IF NOT EXISTS pet_users (username VARCHAR(20) PRIMARY KEY, 
	password VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL, firstName VARCHAR(20) NOT NULL, lastName VARCHAR(20) NOT NULL, dogs TEXT[])`, 
	(err, res) => {
		if (err) {
			console.log('error in creating table', err);
		}
		else {
			console.log('success in creating table!', res);
			next();
		}
	});
});


dbController.createUser = ((req, res, next) => {
	console.log('what is my response', req.body);

	return db.query('INSERT INTO pet_users (username, password, email, firstname, lastname, dogs)', (err, res) => {
		if (err) {
			console.log('error in adding user to DB', err);
		}
		else {
			console.log('success in adding user to DB!', res);
			next();
		}
	});
});

module.exports = ('dbController', dbController);