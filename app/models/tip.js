const mongo = require('mongoose');

const Schema = mongo.Schema;

var tipSchema = new Schema({
    text = String
})

mongo.model("Tip", tipSchema);