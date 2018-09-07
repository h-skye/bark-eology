const { Client } = require('pg');
const client = new Client({
	user: 'yanyan',
	host: 'localhost',
	database: 'barkeologyusers',
	password: 'subwoofer',
	port: 5432
});

client.connect();

module.exports = client;