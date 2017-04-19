var express = require("express");
var app = express();

var path = require("path");
var bp = require("body-parser");

app.use(bp.json());
app.use(express.static(path.join(__dirname + "/client")));

app.listen(8081, function() {
    console.log("listening");
});
