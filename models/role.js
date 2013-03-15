// Role Model
// Project.JS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var permissionSchema = new Schema({
  title: { type: String, required: true, trim: true },
});

var roleSchema = new Schema({
  title: { type: String, required: true, unique: true, trim: true },
  permissions: [permissionSchema] 
});

var Role = mongoose.model('Role', roleSchema);
var Permission = mongoose.model('Permission', permissionSchema);
