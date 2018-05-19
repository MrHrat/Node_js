const mongoose = require('mongoose');

// Схема списку досвіду програмування
var expprogramming = new mongoose.Schema({
	// Назва досвіду програмування
	name:{
		type:String,
		required:[true,"expprogrammingRequired"],
		unique:true
	}
});

module.exports = mongoose.model('ExpProg', expprogramming);