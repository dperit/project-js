// Default Routes
// Project.JS
var passport = require('passport');

module.exports = function(app) {
  var prefix = app.get('apiPrefix');

  app.post(prefix + '/login',
          passport.authenticate('local'),
          function(req, res, next) {
            res.send(req.user);
            res.end();
          }
  );

  /*
  app.get('/api/login', function(req, res) {
    if (req.session.user) {
      res.send(req.session.user);
    }
  }
  );*/

  app.get('/api/logout', function(req, res) {
    req.user = null;
    res.send();
    res.end();
  });

  return {
    users: require('./users')(app),
    roles: require('./roles')(app),
    projects: require('./projects')(app),
    utility: require('./utility')(app),
    project: require('./project')(app)
  };
};
