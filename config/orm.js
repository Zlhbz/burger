const connection = require("./connection");


var orm = {
    selectAll: function (table, cb) {
        console.log("working");
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }


    // insertOne: function () {

    // },

    // updateOne: function () {

    // }

}


module.exports = orm;