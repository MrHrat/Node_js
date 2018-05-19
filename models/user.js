const mongoose = require('mongoose');

// Валідація
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// Схема користувача
var userSchema = new mongoose.Schema({
	// Логин
	username: {
		type:String,
		required:[true,"usernameRequired"],
		maxlength:[32,"tooLong"],
		minlength:[6,"tooShort"],
		match:[/^[a-z0-9]+$/,"usernameIncorrect"],
		unique:true
	},
	// Email
	email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
	// Пароль
	password: {
		type:String,
		maxlength:[32,"tooLong"],
        minlength:[8, "tooShort"],
        match:[/^[A-Za-z0-9]+$/,"passwordIncorrect"],
        required:[true,"passwordRequired"]		
	},
	// Рівень доступу
	accesslevel: {
        type: Number,
        required: true,
        min: 0,
		max: 2,
		default: 2
    },
	// Дані користувача
	userdata: {
		// Ім'я
		name: {
			type:String,
			required:[true,"nameRequired"],
			maxlength:[32,"tooLong"],
			minlength:[6,"tooShort"],
			match:[/^[a-z0-9]+$/,"usernameIncorrect"],
		},
		// Дата народження
		birth: {
			type: Date, 
			default: Date.now 
		},
		// Розташування аватара
		avatarway: {
			type: String,
			default: 'images/default/default-avatar.png'
		},
		// досвід програмування
		idexp: Schema.Types.Mixed
	}
});

module.exports = mongoose.model('User',userSchema);