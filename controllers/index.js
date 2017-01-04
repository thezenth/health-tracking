var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

var request = require('request');

//var Food = require('../models/food'); // is this extraneous?

//router.use('/foods', require('./foods'))
//router.use('/meals', require('./meals'))
//router.use('/searchResult', require('./searchResults'));
router.use('/results', require('./results'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {

  var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";
  var query = req.body.foodQuery;
  var searchUrl = `http://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=10&offset=0&api_key=${apiKey}`
  console.log(`USDA API QUERY URL: ${searchUrl}`);
  request(searchUrl, function(err, response, body) {
    if (err) {
      throw err;
    } else if (response.statusCode == 200) {
      // JESUS CHRIST I FORGOT TO ACTUALLY PARSE THE BODY
      var parsedBody = JSON.parse(body);
      var items = parsedBody.list.item;
      var dbNumbers = [];

      console.dir(`ITMES: ${items}`);

      for(var i = 0; i<items.length; i++) {
        console.log(`FOUND NDBNO: ${items[i].ndbno}`)
        dbNumbers.push(items[i].ndbno);

        // wait till it gets through everything to build query string and redirect
        if(i == items.length - 1) {
          console.log(dbNumbers);

          // Build query string and redirect to results page
          var queryString = "?items=" + dbNumbers.toString();
          res.redirect('/results' + queryString);
        }
      }
    } else {
      console.error(response.statusCode);
    }
  });
});

module.exports = router;
