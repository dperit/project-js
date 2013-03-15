var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , mongoose = require('mongoose')
  , User = mongoose.model('User');

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
