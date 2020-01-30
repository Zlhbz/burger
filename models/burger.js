const orm = require("../config/orm")


var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            console.log("burger ==> " + "working");
            cb(res);
        });

    },

    insertOne: function (cols, vals, cb) {

        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });


    },
    // updateOne: function (objColVals, condition, cb) {

    // },
};


module.exports = burger;