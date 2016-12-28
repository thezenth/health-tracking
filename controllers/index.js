var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

var Food = require('../models/food'); // is this extraneous?

router.use('/foods', require('./foods'))
router.use('/meals', require('./meals'))

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  //console.dir(req.body);
  //console.dir(Object.keys(Food.schema.obj));
  //var newFood = new Food( req.body );
  //newFood.save();
})

module.exports = router;
