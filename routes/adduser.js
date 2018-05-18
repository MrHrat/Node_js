var express = require('express');
var router = express.Router();

/* GET users add. */
router.get('/', function(req, res, next) {
    res.render('adduser', { title: 'New user' });
});

module.exports = router;