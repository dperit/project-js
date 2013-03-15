// Default Routes
// Project.JS
var passport = require('passport');

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.json({message: "Hello!"});
  });

  app.post('/login',
           passport.authenticate('local'),
           function(req, res){
             res.end('You did it.');
           });
};
