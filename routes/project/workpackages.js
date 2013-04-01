var Utilities = require('../../utilities');

module.exports = function(app) {
  var prefix = app.get('apiPrefix');
  
  // GET /project/:project/workpackage: get a project's work packages
  app.get(prefix + '/projects/:project/workpackages', function(req, res) {
    var project = req.project;
    res.send(req.query.list ? Utilities.lightList(project.workPackages) : project.workPackages);
  });

  // :milestone parameter route: finds a milestone &
  // passes it to next route, handles errors
  app.param('workpackage', function(req, res, next, id){
    var project = req.project;
    var wp = project.hasWorkPackageAndRetrieve(id);
    if(wp){
      req.workPackage = wp;
      next();
    }
    else {
      res.send(404, 'Work Package not found');
      res.end();
    }
  }); // app.param('workpackage')

  // GET /project/:project/workpackages/:workpackage: get a project's specific work package
  app.get(prefix + '/projects/:project/workpackages/:workpackage', function(req, res) {
    res.send(req.workPackage);
  });
};