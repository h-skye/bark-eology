const db = require ('./db');

const dbController = {};

dbController.createTable = ((req, res, next) => {

	return db.query(`CREATE TABLE IF NOT EXISTS pet_users (username VARCHAR(20) PRIMARY KEY, 
	password VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL, firstName VARCHAR(20) NOT NULL, lastName VARCHAR(20) NOT NULL, dogs TEXT[])`, 
	(err, res) => {
		if (err) {console.log('error in creating table', err);}
		else {console.log('success in creating table!', res);}
	});
});

dbController.createTable();

module.exports = ('dbController', dbController);