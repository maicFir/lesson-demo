const path = require('path');
const express = require('express');
const Mock = require('mockjs'); 
const router = express.Router();
const defaults = require('../cfg/defaults');

const app = express();

app.use(express.static(path.join(__dirname, '../')));

require('./routes')(app);

app.listen(defaults.defaultPort, function() {
	console.log('server is now running on port ' + defaults.defaultPort)
})