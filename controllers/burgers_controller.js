//Dependencies
//series of npm packages that we will use to give our server useful functionality
//==================================================
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');
var burger = require('../models/burger.js');

//EXPRESS CONFIGURATION
//Sets up the Express App basic properties
//=============================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//sets up mySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Root get route.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            throw err;
        }
        res.render("index.handlebars", { burgers: data });
    });
});



//ROUTER
//The below points our server to a series of 'route' files
//The routes give our server a 'map' of how to respond when users visit
//or request data from various URLs
//==========================================================
var router = express.Router();

app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});

//LISTENER
//Starts the server to begin listening
//==================================================
module.exports = router;