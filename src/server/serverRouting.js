const cookieParser = require('cookie-parser');
const dbController = require('./../../db/dbController.js');

const server = {};

server.verifyUser = ((req, res, next) => {

	console.log('my req body in server verifyUser is', req.body);
});

module.exports = ('server', server);
