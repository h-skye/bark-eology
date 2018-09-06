const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './../../dist')));
// app.use(cors({
// 	'allowedHeaders': ['sessionId', 'Content-Type'],
// 	'exposedHeaders': ['sessionId'],
// 	'origin': '*',
// 	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
// 	'preflightContinue': false
// }));

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, './../../dist/index.html'));

// });

app.listen(3000, (err) => {
	if (err) console.log('Error in server starting', err);
	else console.log('Borking on port 3000!');
});