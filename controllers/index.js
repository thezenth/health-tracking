var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

var Food = require('../models/food'); // is this extraneous?

router.use('/users', require('./users'))

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./misc.json', function(err, data) { //note: . is used instead of .. because the "reference" directory is the directory that app.js is running in
    if (err) {
      throw err;
    } else {
      console.log(data);
      var jsonData = JSON.parse(data);

      Food.find({}, function(err, foods) {
        res.render('index', { title: 'Express', strArray: jsonData.food_string_values, numArray: jsonData.food_number_values, mealDateArray: jsonData.meal_datetime_values, allFoods: foods });
      });
    }
  });
});

module.exports = router;
