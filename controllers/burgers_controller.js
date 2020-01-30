var express = require("express");
var router = express.Router();

var burger = require("../models/burger")



router.get("/api/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var all_ham = {
            burger: data
        };
        // console.log(all_ham);
        res.json(all_ham);
    });
});

// post
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // console.log("Looking for insertId---> " + JSON.stringify(result));
        res.json({ id: result.insertId });
    });
});

// get
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var all_ham = {
            burger: data
        };
        // console.log(all_ham);
        res.render("index", all_ham);
    });
});


// //get
// router.get("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;


// });


// put

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("status-->", condition);

    burger.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// delete




module.exports = router;