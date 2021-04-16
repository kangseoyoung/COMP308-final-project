var config = require('./config');
var express = require("express");
var morgan = require("morgan");
var compress = require("compress");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session = require("express-session");

module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === "development"){
        app.use(morgan("dev"));
    }
    else if(process.env.NODE_ENV === "production"){
        app.use(compress());
    }
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.use(bodyParser.json());
    return app;
}
