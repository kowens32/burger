var express = require("express");
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser');

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

        // Test it.
        // console.log('The solution is: ', data);

        // Test it.
        // res.send(data);

        res.render("index.handlebars", { burgers: data });
    });
});



//ROUTER
//The below points our server to a series of 'route' files
//The routes give our server a 'map' of how to respond when users visit
//or request data from various URLs
//==========================================================
var router = express.Router();
// var burger = require('./models/burger);


app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});

//LISTENER
//Starts the server to begin listening
//==================================================
module.exports = router;