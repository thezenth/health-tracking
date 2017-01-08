var express = require('express');
var router = express.Router();

var request = require('request');

var async = require('async');

var health_data = require('../db.js').health_data;

// GET /results
router.get('/', function(req, res) {
  // Get list of USDA database IDs from the query string
  var foodIds = req.query.items.split(','); // Make sure to turn it into an array!
  console.log(foodIds);

  // array to be filled with food objects
  var foodItems = [];

  // Grab each food object according to it's ID in the database
  async.each(foodIds, function(dbN, callback) {
    console.log(`Grabbing food #${dbN}`);

    var apiKey = "FYpMQAWPYLHGPJvmgvtGqNeSStYiFlSgy9Wn3YXC";
    var url = `http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey}&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=${dbN}`
    console.log(`URL: ${url}`);
    request(url, function(err, response, body) {
      console.log(`PARSING @ URL: ${url}`);
      console.log(`RESPONSE CODE: ${response.statusCode}`);
      var parsedBody = JSON.parse(body);
      //console.dir(parsedBody.report.foods[0]);
      foodItems.push(JSON.stringify(parsedBody.report.foods[0]));

      health_data.insert(parsedBody.report.foods[0], function(err, body) {
        if (err) {
          console.error(err);
        } else {
          console.log(body);
        }
      });

      callback(null);
    }); // end request
  }, function(err) {
    if (err) {
      console.log('A request to grab a food object failed.');
    } else {
      console.log(`FOOD ITEMS: ${foodItems}`);
      console.log('Successfully grabbed all nutrition information. Rendering /results...');
      res.render('results', { title: 'Results', foodItems: foodItems });
    }
  });
}); // end router.get

// POST /results
/*
router.post('/', function(req, res) {

});
*/

module.exports = router;
