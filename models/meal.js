var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new Schema({
    timestamp     : Date,
    foods         : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
});

var Meal = mongoose.model('Meal', mealSchema);
module.exports = Meal;
