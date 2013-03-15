'use strict';

PJS.Utilities.toList = function(obj) {
  var list = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      list.push(obj[key]);
    }
  }
  return list;
};