const { Client } = require('pg');
const client = new Client({
	user: 'yanyan',
	host: 'localhost',
	database: 'barkeologyUsers',
	password: 'subwoofer',
	port: 5432
});