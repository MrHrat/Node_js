var mongoose = require('mongoose');
var config = require('config');
var mongoDB = 'mongodb://hrat:RxHAIf6ZoVp3rr3RDVLsqvLzj7YCaKx8Ma919CIB8sGlQvE7gvftMPvYSGIaaXDp8vAjWVz9q7tiUTN1yKhPRw%3D%3D@hrat.documents.azure.com:10255/?ssl=true';

mongoose.connect(mongoDB);

module.exports = mongoose;