var express = require('express')
  , passport = require("passport")
  , MongoStore = require('connect-mongo')(express);

module.exports = function(app)
{
  // port: the port the API (& client) should listen to
  app.set('port', 8080);
  // databaseName: name of the MongoDB database to use
  app.set('databaseName', 'test');
  // apiPrefix: URL prefix for API routes
  app.set('apiPrefix', '/api');
  // apiOnlyMode: if true, the application will only
  // listen and respond to to API requests. session support 
  // & serving pages will be disabled.
  app.set('apiOnlyMode', false);
  ///////////////////////////////////////////////////////////////////
  ///////////// DO NOT ALTER BELOW THIS POINT ///////////////////////
  ///////////////////////////////////////////////////////////////////

  // use short logging
  app.use(express.logger('short'));
  // enable express body parsing
  app.use(express.bodyParser());
  // enable express cookie parsing
  app.use(express.cookieParser());
  // set up session store (client/api mode only)
  if(app.get('apiOnlyMode') === true) {
    // use MongoStore if in production mode
    if (app.get('env') === 'production') {
      app.use(express.session({ secret: 'lolcats',
                              store: new MongoStore({
                                db: app.get('databaseName')
                              })
      }));
    }
    // use MemoryStore if in development mode
    else {
      app.use(express.session({ secret: 'lolcats',
                              store: express.session.MemoryStore({
                                reapInterval: 60000 * 10
                              })
      }));
    }
  }
  // initialize passport
  app.use(passport.initialize());
  // initialize passport session
  // && serve client (client/api mode only)
  if(app.get('apiOnlyMode') === false) {
    app.use(passport.session());
    app.use(express.static(__dirname + '/client/app'));
  }
}
