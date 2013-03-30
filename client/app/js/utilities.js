(function() {

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

// from http://stackoverflow.com/questions/2970525/javascript-regex-camel-case-sentence-case
PJS.Utilities.toCamelCase = function(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

PJS.Utilities.dashed = function(str) {
  return str.replace(/\s/g, '-');
};

PJS.Utilities.findInArray = function(list, id) {
  for (var i = 0; i < list.length; ++i) {
    if (list[i]._id == id) {
      return list[i];
    }
  }
  return false;
};

PJS.Utilities.findIndexInArray = function(list, id) {
  for (var i = 0; i < list.length; ++i) {
    if (list[i]._id == id) {
      return i;
    }
  }
  return -1;
};

PJS.Utilities.isDefined = function(val) {
  return val !== null && val !== undefined && val !== NaN;
};

})();