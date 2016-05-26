// import express & mongoose modules, start express app
var express = require("express")
  , mongoose = require("mongoose")
  , passport = require("passport")
  , app = express();

// configuration
// PLEASE SEE ./config/project.js
// TO SET OPTIONS SUCH AS PORT AND
// API PREFIX
require('./config/project')(app);

// connect to mongoDB
mongoose.connect("mongodb://heroku_app30754304:35n3n98tba935ocnjbs8scbalo@ds045970.mlab.com:45970/heroku_app30754304");

// initialize models & routes
var models = require('./models/index');
var routes = require('./routes/index')(app);

// initialize passport
require("./config/passport");

// start application
var port = app.get('port');
app.listen(port);
console.log("Project.js API going online...")
console.log("Project.js API online: listening on port " + port);

// quick hack to make sure
// roles exist
var Role = mongoose.model('Role');
Role.find({}, function(err, role) {
  if(err) res.send(500, err);
  if(role.length === 0) {
    console.log('empty');
    var dev = new Role({title: 'Developer'});
    dev.save();
    var projectManager = new Role({title: 'Project Manager'});
    projectManager.save();
    var productManager = new Role({title: 'Product Manager'});
    productManager.save();
    var projectLeader = new Role({title: 'Project Leader'});
    projectLeader.save();
    var qaSpecialist = new Role({title: 'QA Specialist'});
    qaSpecialist.save();
  }
});

