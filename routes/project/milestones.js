var Utilities = require('../../utilities');

module.exports = function(app) {
  var prefix = app.get('apiPrefix');

  // GET /project/:project/milestones: get project milestones
  app.get(prefix + "/projects/:project/milestones", function(req, res) {
    res.send(req.query.list ? Utilities.lightList(req.project.milestones) : req.project.milestones);
    res.end();
  });

  // :milestone parameter route: finds a milestone &
  // passes it to next route, handles errors
  app.param('milestone', function(req, res, next, id){
    var project = req.project;
    var ms = project.hasMilestoneAndRetrieve(id);
    if(ms){
      req.milestone = ms;
      next();
    }
    else {
      res.send(404, 'Milestone not found');
      res.end();
    }
  });

  // POST /project/:project/milestones: create project milestones
  app.post(prefix + "/projects/:project/milestones", function(req, res) {
    var project = req.project;
    var milestone = {
      title: req.body.title,
      description: req.body.description,
      wpDependencies: [],
      msDependencies: [],
      priority: 'high',
      status: 'open'
    };
    project.milestones.push(milestone);
    project.save(function(err){
      if(err) {
        console.log(err);
        res.send(500, err);
        res.end();
      }
      res.json(req.project.milestones);
      res.end();
    });
  });

  // GET /project/:project/milestones/:milestone: get a project's specific milestone
  app.get(prefix + '/projects/:project/milestones/:milestone', function(req, res) {
    res.send(req.milestone);
  });
};