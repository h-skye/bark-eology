const db = require ('./db');

const dbController = {};

dbController.createTable = ((req, res, next) => {
	// console.log('request body in create table', req.body);

	return db.query(`CREATE TABLE IF NOT EXISTS pet_users (username VARCHAR(20) PRIMARY KEY, 
	password VARCHAR(20) NOT NULL, email VARCHAR(50) NOT NULL, firstName VARCHAR(20) NOT NULL, lastName VARCHAR(20) NOT NULL, dogs TEXT[])`, 
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

dbController.verifyUser = ((req, res, next) => {
	// console.log('verify user DB', req.body.username);
	// console.log('verify user DB', req.body.password);

	return db.query (`SELECT * FROM pet_users WHERE username = '${req.body.username}' AND password = '${req.body.username}'`, (err, result) => {
		if (result.rowCount > 0) {
			res.locals.doesExist = true;
			console.log('true', res.locals.doesExist);
			next();
		} else if (!result.rowCount) {
			res.locals.doesExist = false;
			console.log('false', res.locals.doesExist);
			next();
		} else {
			console.log('error in verifying user in DB', err);
		}
	});
});


dbController.createUser = ((req, res, next) => {
	console.log('what is my response body in DB', req.body);
	console.log('what is my response body in DB', req.body.username);
	console.log('what is my response body in DB', req.body.password);
	console.log('what is my response body in DB', req.body.email);
	console.log('what is my response body in DB', req.body.firstname);
	console.log('what is my response body in DB', req.body.lastname);
	console.log('what is my response body in DB', req.body.lastname);
	console.log('what is my response body in DB', req.body.dogs);

	const query = `INSERT INTO pet_users (username, password, email, firstname, lastname, dogs)
	VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.firstname}', '${req.body.lastname}',
	'{${req.body.dogs}}')`;

	return db.query(query, (err, res) => {
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