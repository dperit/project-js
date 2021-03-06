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

PJS.Utilities.setSelectedOption = function(selectMenu, expected) {
  if (!selectMenu) return;

  var anySelected = false;
  var length = selectMenu.children.length;
  for (var i=0; i<length; ++i) {
    var child = selectMenu.children[i];
    if (child) {
      if (!child.textContent) {
        selectMenu.removeChild(child);
        --i;
      } else {
        child.selected = child.textContent === expected ? 'selected' : '';
        if (child.selected) anySelected = true;
      }
    }
  }
  if (!anySelected && selectMenu.children.length) {
    selectMenu.children[0].selected = true;
  }
  if (selectMenu.className.indexOf('select2') !== -1) {
    $(selectMenu).select2();
  }
};

PJS.Utilities.filterByStatus = function(items, status) {
  var newItems = [];

  items.forEach(function(item) {
    var itemAdded = false;
    if (item.status) {
      status.forEach(function(s) {
        if (!itemAdded && (item.status === s || item.status.type === s)) {
          newItems.push(item);
          itemAdded = true;
        }
      });
    }
  });

  return newItems;
};

PJS.Utilities.projectUsersToUserList = function(projectUsers) {
  var users = [];
  projectUsers.forEach(function(userObj) {
    users.push(userObj.user);
  });
  return users;
};

PJS.Utilities.popupModalDialog = function(body) {
  var html =
    '<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
      '<div class="modal-body">' +
        '<p>' + body + '</p>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>' +
      '</div>' +
    '</div>'
  $(html).modal();
};

})();