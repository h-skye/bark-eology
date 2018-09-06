const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './../../dist')));

app.listen(3000, (err) => {
	if (err) console.log('Error in server starting', err);
	else console.log('Borking on port 3000!');
});