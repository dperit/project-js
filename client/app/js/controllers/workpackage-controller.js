PJS.Controllers.WorkPackage = {
  relations: {
    'dependencies': 'WorkPackage'
  },

  reverseRelations: {
    'workItems': {relation: 'workPackages', type: 'WorkItem'}
  },

  list: function($scope, $routeParams, WorkPackage, Project, WorkItem) {
    $scope.project = Project.get({id: $routeParams.projectId.toLowerCase()}, function(project) {
      $scope.workPackages = PJS.ViewModels.each('WorkPackage', project.workPackages);
    });
  },

  get: function($scope, $routeParams, WorkPackage, Project, WorkItem) {
    $scope.project = Project.get({id: $routeParams.projectId.toLowerCase()}, function(project) {
      var workPackage = PJS.Utilities.findInArray(project.workPackages, $routeParams.workPackageId.toLowerCase());
      $scope.workPackage = PJS.ViewModels.WorkPackage(workPackage);
    });
  }
};