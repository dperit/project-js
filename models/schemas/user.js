var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose');

// username & password fields provided by passport-local-mongoose
var User = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, sparse: true },
  resetMode: { type: Boolean, default: false },
  siteAdmin: { type: Boolean, default: false },
  registrationDate: { type: Date, default: Date.now },
  currentProject: { type: Schema.Types.ObjectId, ref: 'Project' },
  lastModifiedProject: { type: Schema.Types.ObjectId, ref: 'Project' }
});

// plugin for passport-local-mongoose
User.plugin(passportLocalMongoose);

module.exports = User;