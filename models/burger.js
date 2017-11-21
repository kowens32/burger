var orm = require('../config/orm.js');

var burgers = {
   selectAll: function(){
       orm.selectAll('burgers', function(res) {
           cb(res)
       });
},

    insertOne: function() {
       orm.insertOne('burgers',col,value, function(res){
           cb(res);
       });
    },

    updateOne: function() {
       orm.updateOne('burgers', col, value, function(res){
           cb(res);
       });
    }
};

module.exports = burgers;