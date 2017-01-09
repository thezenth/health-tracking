var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

var request = require('request');

var async = require('async');

/* GET /meal */
router.get('/', function(req, res) {

  // get the food query from the query string
  var foodQuery = req.query.q;

  // api key
  var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";

  // build the search url
  var searchUrl = `http://api.nal.usda.gov/ndb/search/?format=json&q=${foodQuery}&sort=r&max=10&offset=0&api_key=${apiKey}`;

  // array where we'll store all the nutrition information
  var allNutritionInfo = [];

  // make the request
  request(searchUrl, function(err, response, body) {
    if (err) {
      console.error(err);
    } else if (response.statusCode == 200) {

      var parsedBody = JSON.parse(body);

      if (parsedBody.errors) {
        // error handling - if something non-fatal goes wrong, send it to the warnings page
        console.error(parsedBody.errors.error[0]);
        res.redirect('/warnings?m=' + parsedBody.errors.error[0].message);
      } else {
        var items = parsedBody.list.item;

        // for each item found, get the nutrition information

        async.each(items, function(item, callback) {
          // grab the db number (the db id)
          var dbN = item.ndbno;

          // build query url for the nutrition information
          var nutritionInfoUrl = `http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey}&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=${dbN}`

          request(nutritionInfoUrl, function(nErr, nResponse, nBody) {
            if (nErr) {
              console.error(nErr);
            } else {
              // parse the body and push it to the nutrition array
              allNutritionInfo.push(JSON.parse(nBody));

              // call the callback, and go on to the next item! (or end the loop, as it may be)
              callback(null);
            }
          }); // end request inside async.each
        }, function(err) {
          if (err) {
            console.error(err);
          } else {
            res.render('found-foods', { foods: allNutritionInfo });
          }
        });
      } // end if-else for first request (check for body errors)
    } // end if-else for first request (status code)
  }); // end request
});

module.exports = router;
