// require necessary modules, start express app
var express = require("express");
var app = express();
// configuration
var port = 3000;

app.use(app.router);
app.use(express.static(__dirname + '/app'));

// start application
app.listen(port);
console.log("Listening on port: " + port);