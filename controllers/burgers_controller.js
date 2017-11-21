var express = require("express");
var app = express();
var PORT = 3000;

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
    database: "burgers"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});


//ROUTER
//The below points our server to a series of 'route' files
//The routes give our server a 'map' of how to respond when users visit
//or request data from various URLs
//==========================================================
var router = express.Router();
var burger = require(../models/burger.js);


app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});

//LISTENER
//Starts the server to begin listening
//==================================================
module.exports = router;