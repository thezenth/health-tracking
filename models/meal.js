var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new Schema({
    timestamp     : Date,
    foods         : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
});

var Symptom = mongoose.model('Meal', mealSchema);
var module.exports = Meal;
