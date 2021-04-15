var config = require('./config');
var mongo = require('mongoose');

module.exports = function() {
    const database = mongo
    .connect(config.database, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("Connection established"))
    .catch((err) => {
        console.log("Failed to connect with database")
    });

    require('../app/models/patient');
    return database;
}