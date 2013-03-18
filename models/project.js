//Project Model
//Project.JS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectUser = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  role: { type: Schema.Types.ObjectId, ref: 'Role'}
});

var WorkBreakdown = new Schema({
  items: [Schema.Types.ObjectId],
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var WorkBreakdownItem = new Schema({
  itemNumber: { type: Number, required: true, unique: true }, // index start?
  description: { type: String, required: true, unique: true, trim: true },
  ancestors: [Schema.Types.ObjectId], // itemNumber instead?
  parent: Schema.Types.ObjectId, // itemNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var MilestoneListEntry = new Schema({
  items: [Schema.Types.ObjectId], // use msNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var Completion = new Schema({
  wkPackage: { type: Schema.Types.ObjectId, required: true }, // use wpNumber instead?
  percentage: { type: Number, required: true, min: 0, max: 100, default: 100 }
});

var Milestone = new Schema({
  msNumber: { type: Number, required: true, unique: true }, // index start?
  description: { type: String, required: true, unique: true, trim: true }, // unique necessary?
  dueDate: { type: Date, required: true },
  priority: { type: String, trim: true }, //required?
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true },
  wpDependencies: [Schema.Types.ObjectId], // use wpNumber instead?
  msDependencies: [Schema.Types.ObjectId], // use msNumber instead?
  requiredCompletion: [Completion],
  lastModifiedDate: {type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var WorkPackageListEntry = new Schema({
  items: [Schema.Types.ObjectId], // use wpNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var WorkPackage = new Schema({
  wpNumber: { type: Number, required: true, unique: true }, // index start?
  description: { type: String, required: true, unique: true, trim: true },
  priority: { type: String, trim: true },
  timeEstimate: { type: Number, required: true },
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true },
  dependencies: [Schema.Types.ObjectId], // use wpNumber instead?
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead
});

var WorkItemListEntry = new Schema({
  items: [Schema.Types.ObjectId], // use itemNumber instead?
  lastModifiedDate: {type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var Comment = new Schema({
  commentNumber: { type: Number, required: true }, //unique?
  title: { type: String, trim: true },
  text: { type: String, required: true },
  postedBy: Schema.Types.ObjectId, // use userId instead?
  datePosted: { type: Date, default: Date.now }
});

var WorkItem = new Schema({
  itemNumber: { type: Number, required: true, unique: true }, // index start?
  description: { type: String, required: true, unique: true, trim: true },
  workPackages: [Schema.Types.ObjectId], // use wpNumber instead?
  assignedUsers: [Schema.Types.ObjectId], // use userId instead?
  dependencies: [Schema.Types.ObjectId], // use itemNumber instead?
  startDate: { type: Date, required: true },
  timeEstimate: { type: Number, required: true },
  timeSpent: { type: Number }, // ? required: true, default: 0
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true },
  comments: [Comment],
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: Schema.Types.ObjectId // use userId instead?
});

var projectSchema = new Schema({
  title: { type: String, required: true, unique: true, trim: true },
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
    if (this.projectUsers[i].user._id == id) {
      return true;
    }
  }
  return false;
};

projectSchema.methods.hasUserAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.projectUsers.length; i += 1) {
    if (this.projectUsers[i].user._id == id) {
      return this.projectUsers[i];
    }
  }
  return false;
};

projectSchema.methods.hasUserAndRetrieveIndex = function(id, cb) {
  for (var i = 0; i < this.projectUsers.length; i += 1) {
    if (this.projectUsers[i].user._id == id) {
      return i;
    }
  }
  return false;
};

projectSchema.methods.hasMilestoneAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.milestones.length; i += 1) {
    if (this.milestones[i]._id == id) {
      return i;
    }
  }
  return false;
};

projectSchema.methods.hasWorkPackageAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.workPackages.length; i += 1) {
    if (this.workPackages[i]._id == id) {
      return i;
    }
  }
  return false;
};

projectSchema.methods.hasWorkItemAndRetrieve = function(id, cb) {
  for (var i = 0; i < this.workItems.length; i += 1) {
    if (this.workItems[i]._id == id) {
      return i;
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
