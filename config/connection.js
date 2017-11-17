//the code to connect node to MySQL

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    databse: 'burgers'
});

connection.connect(function(err){
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;