(function() {

'use strict';

PJS.ViewModels = {
  Project: function(project) {
    return PJS.ViewModels.all(project);
  },
  
  Milestone: function(milestone) {
    return PJS.ViewModels.all(milestone);
  },
  
  WorkItem: function(workItem) {
    return PJS.ViewModels.all(workItem);
  },
  
  Comment: function(comment) {
    comment.postedBy = PJS.ViewModels.User(comment.postedBy);
    return PJS.ViewModels.all(comment);
  },
  
  WorkBreakdownItem: function(wbItem) {
    return PJS.ViewModels.all(wbItem);
  },
  
  WorkPackage: function(workPackage) {
    return PJS.ViewModels.all(workPackage);
  },

  ProjectUser: function(projectUser) {
    projectUser.role = PJS.ViewModels.Role(projectUser.role);
    projectUser.user = PJS.ViewModels.User(projectUser.user);
    return PJS.ViewModels.all(projectUser);
  },

  User: function(user) {
    return PJS.ViewModels.all(user);
  },

  Role: function(user) {
    return PJS.ViewModels.all(user);
  },

  each: function(viewModelName, list) {
    var ViewModel = PJS.ViewModels[viewModelName] || PJS.ViewModels.all;
    var newList = [];
    list.forEach(function(item) {
      newList.push(ViewModel(item));
    });
    return newList;
  },

  all: function(resource) {
    resource = angular.extend({}, resource);
    if (resource.id === undefined) {
      resource.id = resource._id;
    }
    if (resource.lastModifiedBy) {
      resource.lastModifiedBy = PJS.ViewModels.User(resource.lastModifiedBy);
    }
    if (resource.status) {
      var type = resource.status;
      resource.status = statuses[resource.status];
      resource.status.type = type;
      resource.status.labelType = labelTypes[resource.status.level];
    }
    return resource;
  },
};

var statuses = {
  'open': {text: 'Open', level: 0},
  'late': {text: 'Late', level: 1},
  'closed': {text: 'Closed', level: 2},
  'deleted': {text: 'Deleted', level: 2}
};

var labelTypes = {
  0: 'label-success',
  1: 'label-warning',
  2: 'label-important'
};

})();