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
        res.render("index", allHam);
    });
});




// post
// put
// delete




module.exports = router;