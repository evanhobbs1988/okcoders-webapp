//API module
'use strict';

var express = require('express');
var router = express.Router();

//First Route for API to return Json object
router.get('/comic' , function( req, res){
	res.json({comic:[]});
})

//TODO: Add post route, put route, delete route


//use exports method to expose the router
module.exports = router;
