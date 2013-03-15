(function() {

'use strict';

var user = null;

PJS.Controllers = {
  all: function($scope, $routeParams) {
    $scope.user = user;
    $scope.loggedIn = !!user;
  },

  nav: function($scope, $routeParams) {
    PJS.Controllers.all($scope, $routeParams);
  },

  login: function($scope, $routeParams, User) {
    PJS.Controllers.all($scope, $routeParams);
    $scope.login = function() {
      /*User.get({name: $scope.username, password: $scope.password}, function(loggedInUser) {
        user = loggedInUser;
      });*/
    };
  },

  register: function($scope, $routeParams, User) {
    PJS.Controllers.all($scope, $routeParams);
    $scope.register = function() {
      /*User.get({name: $scope.username, password: $scope.password}, function(loggedInUser) {
        user = loggedInUser;
      });*/
    };
  },

  projects: function($scope, $routeParams, Project) {
    PJS.Controllers.all($scope, $routeParams);
    $scope.projects = Project.query(function() {
      var sortingMethod = sortProjects[$routeParams.sort] ? $routeParams.sort : 'name';
      $scope.projects = sortProjects[sortingMethod]($scope.projects);
      $scope.projects.forEach(function(project, key) {
        $scope.projects[key] = PJS.ViewModels.project(project);
      });
    });
  },

  project: function($scope, $routeParams, Project) {
    PJS.Controllers.all($scope, $routeParams);
    Project.get({name: $routeParams.projectName.toLowerCase()}, function(project) {
      $scope.project = PJS.ViewModels.project(project);
    });
  },
  
  addProject: function($scope, $routeParams, Project) {
    $scope.addProject = function() {
      var project = new Project({name: $scope.name, description: $scope.description});
      project.$save();
    };
  },

  workBreakdown: function($scope, $routeParams, WorkBreakdown, Project) {
    PJS.Controllers.all($scope, $routeParams);
    Project.get({name: $routeParams.projectName.toLowerCase()}, function(project) {
      $scope.project = PJS.ViewModels.project(project);
      $scope.workBreakdown = WorkBreakdown.query({projectName: project.name});
    });
  },

  workPackages: function($scope, $routeParams, WorkPackage, Project) {
    PJS.Controllers.all($scope, $routeParams);
    Project.get({name: $routeParams.projectName.toLowerCase()}, function(project) {
      $scope.project = PJS.ViewModels.project(project);
      $scope.workPackages = WorkPackage.query({projectName: project.name});
    });
  },

  workItems: function($scope, $routeParams, WorkItem, Project) {
    PJS.Controllers.all($scope, $routeParams);
    Project.get({name: $routeParams.projectName.toLowerCase()}, function(project) {
      $scope.project = PJS.ViewModels.project(project);
      $scope.workItems = WorkItem.query({projectName: project.name});
    });
  },

  milestones: function($scope, $routeParams, Milestone, Project) {
    PJS.Controllers.all($scope, $routeParams);
    Project.get({name: $routeParams.projectName.toLowerCase()}, function(project) {
      $scope.project = PJS.ViewModels.project(project);
      $scope.milestones = Milestone.query({projectName: project.name});
    });
  }
};

var sortProjects = {
  priority: function(projects) {
    return projects.sort(function(a, b) {
      return a.priority > b.priority ? 1 : -1;
    });
  },
  
  due: function(projects) {
    return projects; // TODO: Implement this.
  },
  
  name: function(projects) {
    return projects.sort(function(a, b) {
      return a.name > b.name ? 1 : -1;
    });
  }
};

})();