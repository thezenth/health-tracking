var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

var request = require('request');

//var Food = require('../models/food'); // is this extraneous?

router.use('/foods', require('./foods'))
router.use('/meals', require('./meals'))
//router.use('/searchResult', require('./searchResults'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {

  /*var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";
  var query = req.body.foodQuery;
  var searchUrl = `http://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=10&offset=0&api_key=${apiKey}`;
  request(searchUrl, function(err, response, body) {
    if (err) {
      throw err;
    } else if (response.statusCode == 200) {
      res.
    } else {
      console.error(response.statusCode);
    }
  });*/
});

module.exports = router;
