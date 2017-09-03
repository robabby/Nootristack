const passport = require('passport');
// http://console.developers.google.com to set up a new Oauth app
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // once you hit this segment of the process, the token is cached
    // and google wont need to ask for permission again until expiration
    new User({ googleId: profile.id }).save();
  })
);
