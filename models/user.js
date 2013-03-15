// User Model
// Project.JS
var mongoose = require('mongoose')
  , passportLocalMongoose = require('passport-local-mongoose');

// username & password fields provided by passport-local-mongoose
var UserSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true }, // unique?
  siteAdmin: { type: Boolean, default: false },
  registrationDate: { type: Date, default: Date.now }
});

// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
