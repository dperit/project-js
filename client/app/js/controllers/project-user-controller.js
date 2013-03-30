(function() {

PJS.Controllers.ProjectUser = {
  populate: function(project, User, Project, Role) {
    project.projectUsers.forEach(function(userObj, index) {
      PJS.Controllers.ProjectUser.populateUser(project, userObj, User, Project, Role);
    });
  },

  populateUser: function(project, userObj, User, Project, Role) {
    User.get({id: userObj.user}, function(user) {
      userObj.user = user;
      Role.get({id: userObj.role}, function(role) {
        userObj.role = role;
        project.projectManager = findFirstUserByRole(project.projectUsers, 'project manager');
      });
    });
  },

  update: function($scope, $routeParams, User, Project, Role) {
    var projectId = $routeParams.projectId.toLowerCase();

    User.query(function(users) {
      $scope.usersList = PJS.ViewModels.each('User', users);
      
      Role.query({list: true}, function(roles) {
        $scope.rolesList = PJS.ViewModels.each('Role', roles);

        Project.get({id: projectId}, function(project) {
          $scope.project = project;
          PJS.Controllers.ProjectUser.populate(project, User, Project, Role);
          $scope.users = PJS.ViewModels.each('ProjectUser', project.projectUsers);

          $scope.updateRole = function(userObj) {
            project.$save(project);
          };

          $scope.addUser = function() {
            var userId = $scope.addUserChosen._id;
            if (!userInProject(project.projectUsers, userId)) {
              project.projectUsers.push({user: $scope.addUserChosen._id, role: $scope.addRoleChosen._id});
              project.$save(project);
            }
          };

          $scope.removeUser = function(userObj) {
            var index = userIndexInProject(project.projectUsers, userObj.user.id);
            if (index !== -1) {
              project.projectUsers.splice(index, 1);
              console.log(project.projectUsers);
              console.log(project);
              project.$save(project);
            }
          };

        });

      });

    });
  }
};

var userInProject = function(users, id) {
  var found = false;
  for (var i=0; i<users.length && !found; ++i) {
    if (users[i].user.id === id) {
      found = true;
    }
  }
  return found;
};

var userIndexInProject = function(users, id) {
  var found = -1;
  for (var i=0; i<users.length && found === -1; ++i) {
    if (users[i].user.id === id) {
      found = i;
    }
  }
  return found;
};

var findFirstUserByRole = function(users, role) {
  var user = null;
  for (var i=0; i<users.length && !user; ++i) {
    if (users[i].role.title.toLowerCase() === role) {
      user = users[i].user;
    }
  }
  return user;
};

})();