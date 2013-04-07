module.exports = function(app)
{
  // port: the port the API (& client) should listen to
  app.set('port', 8080);
  // apiPrefix: URL prefix for API routes
  app.set('apiPrefix', '/api');
  // apiOnlyMode: if true, the application will only
  // listen and respond to to API requests. session support 
  // & serving pages will be disabled.
  app.set('apiOnlyMode', false);
}
