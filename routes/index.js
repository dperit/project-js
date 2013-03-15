// Default Routes
// Project.JS
var passport = require('passport');

module.exports = function(app) {
  var prefix = app.get('apiPrefix');
  app.get(prefix + "/", function(req, res) {
    res.json({message: "Hello!"});
  });

  app.post(prefix + '/login',
           passport.authenticate('local'),
           function(req, res){
             res.end('You did it.');
           });
};
