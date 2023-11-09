import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.REDIRECT_URI,
  },
  (token, refreshToken, profile, cb) => {
    if (profile) {
      return cb(null, profile);
    }
    return cb(null, false);
  }
)
passport.use(googleStrategy);
