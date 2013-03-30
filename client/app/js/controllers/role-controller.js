PJS.Controllers.Role = {
  lightList: function($scope, $routeParams, Role) {
    $scope.rolesList = Role.query({list: true});
  },

  list: function($scope, $routeParams, Role) {
    $scope.roles = Role.query();
  },

  get: function($scope, $routeParams, Role, Project) {
    var roleId = $routeParams.roleId.toLowerCase();
    $scope.role = Role.get({id: roleId});
  }
};