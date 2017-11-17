var connection = require('./connection');

//Object Relational Mapper (ORM)

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [whatToSelect, tableInput], function(err, result){
            if (err) {
                throw err;
            }
          console.log(result);
        });
    },

    insertOne: function (table, col, value) {
        var queryString = 'INSERT INTO ?? VALUES ?';
        connnection.question(queryString, [table,col,value], function[err, result]{
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },

}

