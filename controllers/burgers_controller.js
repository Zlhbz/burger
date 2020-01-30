var express = require("express");
var router = express.Router();

var burger = require("../models/burger")



// get
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var all_ham = {
            burger: data
        };
        console.log(all_ham);
        res.render("index", all_ham);
    });
});

// post
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        console.log("Looking for insertId---> " + result);
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


// put
// delete




module.exports = router;