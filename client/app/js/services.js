(function() {

'use strict';

var services = angular.module('ProjectJS.services', ['ngResource']);
  
services.factory('Project', function($resource) {
  return $resource('projects/:name.json', {}, {
    query: {method: 'GET', params: {name: 'projects'}, isArray: true}
  });
});
  
services.factory('User', function($resource) {
  return $resource('users/:name.json', {}, {
    query: {method: 'GET', params: {name: 'users'}, isArray: true}
  });
});
  
services.factory('WorkBreakdown', function($resource) {
  return $resource('projects/:projectName/workbreakdown/:name.json', {}, {
    query: {method: 'GET', params: {name: 'workbreakdown'}, isArray: true}
  });
});
  
services.factory('WorkPackage', function($resource) {
  return $resource('projects/:projectName/workpackages/:name.json', {}, {
    query: {method: 'GET', params: {name: 'workpackages'}, isArray: true}
  });
});
  
services.factory('Milestone', function($resource) {
  return $resource('projects/:projectName/milestones/:name.json', {}, {
    query: {method: 'GET', params: {name: 'milestones'}, isArray: true}
  });
});
  
services.factory('WorkItem', function($resource) {
  return $resource('projects/:projectName/workitems/:name.json', {}, {
    query: {method: 'GET', params: {name: 'workitems'}, isArray: true}
  });
});

})();