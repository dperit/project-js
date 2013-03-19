//Project Model
//Project.JS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectUser = new Schema({
  user: { type: String },
  role: { type: String }
});

var WorkBreakdown = new Schema({
  items: [String],
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var WorkBreakdownItem = new Schema({
  id: { type: String, required: true, unique: true, sparse: true },
  index: { type: Number, required: true, unique: true, sparse: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  ancestors: [String], // itemNumber instead?
  parent: String, // itemNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var MilestoneListEntry = new Schema({
  items: [String], // use msNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var Completion = new Schema({
  wkPackage: { type: String, required: true }, // use wpNumber instead?
  percentage: { type: Number, required: true, min: 0, max: 100, default: 100 }
});

var Milestone = new Schema({
  id: { type: String, required: true, unique: true, sparse: true },
  index: { type: Number, required: true, unique: true, sparse: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  dueDate: { type: Date },
  priority: { type: String, trim: true }, //required?
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true },
  wpDependencies: [String], // use wpNumber instead?
  msDependencies: [String], // use msNumber instead?
  //requiredCompletion: [Completion],
  lastModifiedDate: {type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var WorkPackageListEntry = new Schema({
  items: [String], // use wpNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var WorkPackage = new Schema({
  id: { type: String, required: true, unique: true, sparse: true },
  index: { type: Number, required: true, unique: true, sparse: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  priority: { type: String, trim: true },
  timeEstimate: { type: Number, required: true },
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true },
  dependencies: [String], // use wpNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead
});

var WorkItemListEntry = new Schema({
  items: [String], // use itemNumber instead?
  lastModifiedDate: {type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var Comment = new Schema({
  index: { type: Number, required: true, unique: true, sparse: true },
  title: { type: String, trim: true },
  text: { type: String, required: true },
  postedBy: String, // use userId instead?
  datePosted: { type: Date, default: Date.now }
});

var WorkItem = new Schema({
  id: { type: String, required: true, unique: true, sparse: true },
  index: { type: Number, required: true, unique: true, sparse: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  workPackages: [String], // use wpNumber instead?
  assignedUsers: [String], // use userId instead?
  dependencies: [String], // use itemNumber instead?
  startDate: { type: Date, required: true },
  timeEstimate: { type: Number, required: true },
  timeSpent: { type: Number }, // ? required: true, default: 0
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true },
  comments: [Comment],
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: String // use userId instead?
});

var projectSchema = new Schema({
  title: { type: String, required: true, unique: true, trim: true },
  description: { type: String, trim: true },
  clientName: { type: String, required: true, trim: true },
  projectDueDate: { type: Date, required: true },
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true},
  dateCreated: { type: Date, default: Date.now },
  lastModifiedDate: {type: Date, default: Date.now },
  dateCompleted: {type: Date},
  projectUsers: [ProjectUser],
  workBreakdownStructure: [WorkBreakdown],
  milestones: [Milestone],
  workPackages: [WorkPackage],
  workItems: [WorkItem]
});

projectSchema.methods.hasUser = function(id, cb) {
  for (var i = 0; i < this.projectUsers.length; i += 1) {
    if (this.projectUsers[i].user._id === id) {
      return true;
    }
  }
  return false;
};

projectSchema.methods.hasUserAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.projectUsers.length; i += 1) {
    if (this.projectUsers[i].user._id === id) {
      return this.projectUsers[i];
    }
  }
  return false;
};

projectSchema.methods.hasUserAndRetrieveIndex = function(id, cb) {
  for (var i = 0; i < this.projectUsers.length; i += 1) {
    if (this.projectUsers[i].user._id === id) {
      return i;
    }
  }
  return false;
};

projectSchema.methods.hasMilestoneAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.milestones.length; i += 1) {
    if (this.milestones[i].id.toLowerCase() === id.toLowerCase()) {
      return this.milestones[i];
    }
  }
  return false;
};

projectSchema.methods.hasWorkPackageAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.workPackages.length; i += 1) {
    if (this.workPackages[i].id.toLowerCase() === id.toLowerCase()) {
      return this.workPackages[i];
    }
  }
  return false;
};

projectSchema.methods.hasWorkItemAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.workItems.length; i += 1) {
    if (this.workItems[i].id.toLowerCase() === id.toLowerCase()) {
      return this.workItems[i];
    }
  }
  return false;
};
projectSchema.pre('save', function(next) {
  var project = this;
  project.lastModifiedDate = new Date();
  next();
});

var Project = mongoose.model('Project', projectSchema);
