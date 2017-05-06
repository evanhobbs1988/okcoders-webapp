
var restify = require('restify');
var server = restify.createServer();
var Comic = require('./models/db');
const port = 8088;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comics');
var db = mongoose.connection;

db.once('open', function(){
	console.log('Mongoose connection established');
});

server.get('/', restify.serveStatic({
	directory: './client', 
	default: "index.html"
}));

server.get('/comics', function(req, res, next){
	Comic.find({}, function(err, comic){
		if (err) res.send(err);
		else{
			res.json(comic);
		}
	});
	return next();
});

server.listen(port, function(){
	console.log("%s listening on port %s", server.name, port);
});




