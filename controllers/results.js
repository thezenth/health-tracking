var express = require('express');
var router = express.Router();

// GET /results
router.get('/', function(req, res) {
  var foodItems = req.query.items;
  res.render('results', { title: "Results from the USDA Database", foodItems: foodItems });
});

// POST /results
/*
router.post('/', function(req, res) {

});
*/

module.exports = router;
