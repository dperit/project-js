'use strict';

var directives = angular.module('ProjectJS.directives', []);

directives.directive('select2', function() {
   return function(scope, element, attrs) {
      element.select2();
      scope.$on('$routeChangeSuccess', function(event, routeData) {
        $('.select2-drop').detach();
        $('.select2-drop-mask').detach();
      });
   }
});

directives.directive('slider', function() {
  return {
    require: '^ngModel',
    link: function(scope, element, attrs, model) {
      var update = function(ev) {
        model.$setViewValue(ev.value);
      };
      var slider = element.slider();
      slider.on('slide', update);
      slider.on('slideStop', update);

      model.$render = function() {
        slider.slider('setValue', model.$viewValue);
      };

      scope.modelValue = function() {
        return model.$viewValue;
      };
    }
  };
});
