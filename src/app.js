'use strict'

var express = require('express');
//create instance of restify server 
var app = express();

//serve static files in public directory, use a slash as first parameter
app.use('/', express.static('public'));

//First Route for API to return Json object
app.get('/api/comic' , function( req, res){
	res.json({comic:[]});
})






//configure server to listen to requests
app.listen(8088, function(){
	console.log('The server is running on port 8088');
});
