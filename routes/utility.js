// Utility Routes
// Project.JS

// 404 handler
module.exports = function(app) {
  app.use(function(req, res, next){
    res.send(404, "Route not found.");
  });
}
