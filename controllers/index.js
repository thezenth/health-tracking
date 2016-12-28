var express = require('express');
var router = express.Router();

router.use('/users', require('./users'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', strArray: ["pizza"] });
});

module.exports = router;
