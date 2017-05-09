'use strict'

var express = require('express');
//make router equal to api module in api dir
var router = require('./api');
var app = express();

require('./database');
require('./seed');

//serve static files in public directory, use a slash as first parameter
app.use('/', express.static('public'));







//mount router to api url
app.use('/api', router);

//configure server to listen to requests
app.listen(8088, function(){
	console.log('The server is running on port 8088');
});
