const express = require('express');
// Auth needs
const passport = require('passport');
// http://console.developers.google.com to set up a new Oauth app
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // once you hit this segment of the process, the token is cached
    // and google wont need to ask for permission again until expiration
    console.log('access token: ', accessToken);
    console.log('refresh token: ', refreshToken);
    console.log('profile: ', profile);
  })
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;
app.listen(PORT);
