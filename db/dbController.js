const db = require ('./db');

const dbController = {};

dbController.createUser = ((req, res, next) => {

	return db.query();
});