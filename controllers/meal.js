var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

/* GET /meal */
router.get('/', function(req, res) {
  res.render('meal');
});

module.exports = router;
