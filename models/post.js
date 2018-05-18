const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
// Создаем новую схему!
var postSchema = new mongoose.Schema({
	title:{
		type:String, // тип: String
		required:[true,"titleRequired"],
		minlength:[6,"tooShort"],
		unique:true // Уникальным
	},
	text:{
		type:String,		
        required:[true,"textRequired"]
	}
});

postSchema.plugin(URLSlugs('title'));

module.exports = mongoose.model('Post',postSchema);