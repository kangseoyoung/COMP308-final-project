process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var mongo = require('./config/mongoose');
var express = require('./config/express');

var database = mongo();
var app = express();

app.listen(3000);

module.exports = app;

console.log('Running at http://localhost:3000/')