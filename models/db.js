var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comic = new Schema({
	'RELEASE DATE' : Date,
	'PUBLISHER' : String,
	'TITLE' : String,
	'PRICE' : String
});
var comic = mongoose.model('things', Comic);
module.exports = comic;