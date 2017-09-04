const passport = require('passport');
// http://console.developers.google.com to set up a new Oauth app
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    // once you hit this segment of the process, the token is cached
    // and google wont need to ask for permission again until expiration
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profileId
          done(null, existingUser)
        } else {
          // make a new record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
  })
);
