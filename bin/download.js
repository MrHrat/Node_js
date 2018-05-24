var fs = require('fs');
var request = require('request');
var im = require('./imagemagick');

var download = function(uri, filename, callback){
  console.log(__dirname);
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    
    if (!fs.existsSync(filename.substring(0,filename.lastIndexOf("/")))){
      fs.mkdirSync(filename.substring(0,filename.lastIndexOf("/")));
    }
    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var Newfolder = function(filename){
  if (!fs.existsSync(filename.substring(0,filename.lastIndexOf("/")))){
    fs.mkdirSync(filename.substring(0,filename.lastIndexOf("/")));
  }
};

exports.downloadImage = function (path, way) {
  var opt, timeStarted = new Date;
  Newfolder(way);
  im.crop(opt = {
    srcPath: path,
    dstPath: way,
    width: 100,
    height: 75,
    format: 'jpg',    
    quality: 0.8
  }, function (err, stdout, stderr){
    if (err) return console.error(err.stack || err);
    console.log('crop(',opt,') ->', stdout);
    console.log('Real time spent: '+(new Date() - timeStarted) + ' ms');
  });
};