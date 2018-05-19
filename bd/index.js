//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://hrat:RxHAIf6ZoVp3rr3RDVLsqvLzj7YCaKx8Ma919CIB8sGlQvE7gvftMPvYSGIaaXDp8vAjWVz9q7tiUTN1yKhPRw%3D%3D@hrat.documents.azure.com:10255/?ssl=true';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));