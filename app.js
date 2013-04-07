// import express & mongoose modules, start express app
var express = require("express"), 
    mongoose = require("mongoose"),
    passport = require("passport"),
    app = express(),
    MongoStore = require('connect-mongo')(app);

// configuration
require('./config/project')(app);
app.use(express.logger('short'));
app.use(express.bodyParser());
app.use(express.cookieParser());
if (app.get('env') === 'production') {
  app.use(express.session({ secret: 'lolcats',
    store: new MongoStore({
     db: app.get('databaseName')
    })
  }));
}
else {
  app.use(express.session({ secret: 'lolcats',
    store: express.session.MemoryStore({
     reapInterval: 60000 * 10
    })
  }));
}
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/client/app'));

// connect to mongoDB
mongoose.connect('localhost', app.get('databaseName'));

var models = require('./models/index');
var routes = require('./routes/index')(app);

// initialize passport
require("./config/passport");

// start application
var port = app.get('port');
app.listen(port);
console.log("Project.js API going online...")
console.log("Project.js API online: listening on port " + port);
