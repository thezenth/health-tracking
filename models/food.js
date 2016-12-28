var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    name              : String,
    description       : String,
    image             : String,
    food_label_image  : String,
    serving_size      : Number,
    calories          : Number,
    calories_from_fat : Number,
    total_fat         : Number,
    saturated_fat     : Number,
    cholesterol       : Number,
    sodium            : Number,
    total_carbs       : Number,
    dietary_fiber     : Number,
    sugars            : Number,
    vitamin_a         : Number,
    vitamin_c         : Number,
    vitamin_d         : Number,
    vitamin_e         : Number,
    vitamin_k         : Number,
    vitamin_b1        : Number,
    vitamin_b2        : Number,
    vitamin_b3        : Number,
    vitamin_b5        : Number,
    vitamin_b6        : Number,
    vitamin_b7        : Number,
    vitamin_b9        : Number,
    vitamin_b12       : Number
});

var Symptom = mongoose.model('Food', foodSchema);
var module.exports = Food;
