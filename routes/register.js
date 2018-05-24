var express = require('express');
var router = express.Router();
var down = require('../bin/download');

const path = require('path');

router.get('/', function(req, res, next) {
    res.render('register', { title: 'New user' });
});

router.post('/', function(req, res, next) {
    console.log(req.body.nick);
    console.log(req.body.mail);
    console.log(req.body.password);
    console.log(req.body.rpassword);
    console.log(req.body.name);
    console.log(req.body.bday);
    console.log(req.body.mail);    
    console.log(req.body.exp);

    var input= req.body.image_file;
    console.log(input +' # '+__dirname +'/'+ req.body.nick +'/');//+ 
    //input.substring(0,input.lastIndexOf("/")));
    //down.downloadImage(  input, __dirname +'/'+ req.body.nick +'/'+ 
    //input.substring(0,input.lastIndexOf("/")))
    var file = $('#image_file')[0].files[0]
    if (file){
    console.log(file.name +' # '+ file);
    }


    res.redirect('/');
});

module.exports = router;