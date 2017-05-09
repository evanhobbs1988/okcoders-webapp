//API module
'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');
var router = express.Router();

//First Route for API to return Json object
router.get('/todos' , function( req, res){
    var todo = req.body;
    Todo.create(todo, function(err, todo){
    if(err) {
    
    return res.status(500).json({message: err.message});
    }
    res.json({todos:[ todos]});
    });
});

//TODO: Add post route, put route, delete route


//use exports method to expose the router
module.exports = router;
