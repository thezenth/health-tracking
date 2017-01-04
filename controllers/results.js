var express = require('express');
var router = express.Router();

var request = require('request');

// GET /results
router.get('/', function(req, res) {
  // Get list of USDA database IDs from the query string
  var foodIds = req.query.items.split(','); // Make sure to turn it into an array!

  // array to be filled with food objects
  var foodItems = [];

  // Grab each food object according to it's ID in the Database
  for (var i = 0; i<foodIds.length; i++) {

    var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";
    var url = `http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey}&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=${foodIds[i]}`
    console.log(`URL: ${url}`);

    request(url, function(err, response, body) {
      var parsedBody = JSON.parse(body);
      console.dir(parsedBody.report.foods[0]);
      foodItems.push(JSON.stringify(parsedBody.report.foods[0]));

      // once we have iterated through foodIds, we can render the page
      // as well, we place this within in the request function in order to ensure that the request completes before we render the page
      if (i == foodIds.length - 1) {
        res.render('results', { title: "Results from the USDA Database", foodItems: foodItems });
      }
    }); // end request
  } //end for loop

});

// POST /results
/*
router.post('/', function(req, res) {

});
*/

module.exports = router;
