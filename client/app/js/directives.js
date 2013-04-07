'use strict';

var directives = angular.module('ProjectJS.directives', []);

directives.directive('select2', function() {
   return function(scope, element, attrs) {
      element.select2();
      element.on('blur', function(e) {
        element.select2('close');
      });
   }
});
