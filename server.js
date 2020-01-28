var express = require("express")
var exphbs = require("express-handlebars");
var sql = require("mysql");
var app = express();
var routes = require("./controllers/burgers_controller");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});