'use strict';

var Todo = require('./models/todo');

var todos = [
    'Comic book 1',
    'Comic book 2',
    'Comic book 3',
];

todos.forEach(function (todo, index) {
    Todo.find({ 'name': todo }, function(err, todos) {
    if (!err && !todos.length) {
        Todo.create({completed: false, name: todo});
    };
    });
});