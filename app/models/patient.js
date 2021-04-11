const mongo = require('mongoose');

const Schema = mongo.Schema;

var patientSchema = new Schema({
    heartBeatRate = Number,
    bloodPressure = Number,
    weight = Number,
    temperature = Number, 
    respiratoryRate = Number,
})

mongo.model("Patient", patientSchema);