'use strict'

var express = require('express');
//create instance of restify server 
var app = express();
//make a router
var router = express.Router();

//serve static files in public directory, use a slash as first parameter
app.use('/', express.static('public'));



//First Route for API to return Json object
router.get('/api/comic' , function( req, res){
	res.json({comic:[]});
})


//TODO: Add post route, put route, delete route

//mount router to app
app.use('/api', router);






//configure server to listen to requests
app.listen(8088, function(){
	console.log('The server is running on port 8088');
});
