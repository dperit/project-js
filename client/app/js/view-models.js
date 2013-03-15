(function() {

'use strict';

var statuses = {
  'onSchedule': {text: 'On Schedule', level: 0},
  'late': {text: 'Late', level: 2}
};

var labelTypes = {
  0: 'label-success',
  1: 'label-warning',
  2: 'label-important'
};

PJS.ViewModels = {
  project: function(project) {
    project = angular.extend({}, project);
    project.status = statuses[project.status];
    project.status.labelType = labelTypes[project.status.level];
    return project;
  }
};

})();