var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var symptomSchema = new Schema({
    name        : String,
    value       : Number,
    dateTime    : Date
});

var Symptom = mongoose.model('Symptom', symptomSchema);
var module.exports = Symptom;
