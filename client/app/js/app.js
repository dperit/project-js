'use strict';

// Expose PJS as the only global object.
this.PJS = {
  Controllers: {},
  Utilities: {},
  ViewModels: {}
};

(function() {

// AngularJS routing for each pages. Links to controllers.
angular.module('ProjectJS', ['ProjectJS.filters', 'ProjectJS.services', 'ProjectJS.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users/login', {templateUrl: 'partials/login.html', controller: PJS.Controllers.login});
    $routeProvider.when('/users/register', {templateUrl: 'partials/register.html', controller: PJS.Controllers.register});
    $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: PJS.Controllers.projects});
    $routeProvider.when('/projects/:projectName', {templateUrl: 'partials/project.html', controller: PJS.Controllers.project});
    $routeProvider.when('/add-project', {templateUrl: 'partials/add-project.html', controller: PJS.Controllers.addProject});
    $routeProvider.when('/projects/:projectName/work-breakdown', {templateUrl: 'partials/project-workbreakdown.html', controller: PJS.Controllers.workBreakdown});
    $routeProvider.when('/projects/:projectName/milestones', {templateUrl: 'partials/project-milestones.html', controller: PJS.Controllers.milestones});
    $routeProvider.when('/projects/:projectName/work-packages', {templateUrl: 'partials/project-workpackages.html', controller: PJS.Controllers.workPackages});
    $routeProvider.when('/projects/:projectName/work-items', {templateUrl: 'partials/project-workitems.html', controller: PJS.Controllers.workItems});
    $routeProvider.otherwise({redirectTo: '/projects'});
  }]);

})();