var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var symptomSchema = new Schema({
    name        : String
});

var Symptom = mongoose.model('Symptom', symptomSchema);
var module.exports = Symptom;
