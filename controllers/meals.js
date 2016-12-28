var express = require('express');
var router = express.Router();

var fs = require('fs'); // for loading files/dealing with the filesystem

var Food = require('../models/food'); // is this extraneous?

/* GET /foods */
router.get('/', function(req, res) {

  fs.readFile('./misc.json', function(err, data) { //note: . is used instead of .. because the "reference" directory is the directory that app.js is running in
    if (err) {
      throw err;
    } else {
      // console.log(data);
      var jsonData = JSON.parse(data);

      Food.find({}, function(err, foundFoods) {
        res.render('meals', { title: 'Express', mealDateArray: jsonData.meal_datetime_values, allFoods: foundFoods });
      });
    }
  });
});

router.post('/', function(req, res) {
  //console.dir(req.body);
  //console.dir(Object.keys(Food.schema.obj));
  //var newFood = new Food( req.body );
  //newFood.save();
})

module.exports = router;
