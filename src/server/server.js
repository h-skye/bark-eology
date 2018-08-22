const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './../../dist/index.html'));
});

app.listen(3000, (err) => {
	if (err) console.log('Error in server starting', err);
	else console.log('Borking on port 3000!');
});