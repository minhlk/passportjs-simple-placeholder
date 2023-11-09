import { Strategy as JwtStrategy } from 'passport-jwt';
import passport from 'passport';
// JWT strategy
const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: (req) => req.cookies?.['x-auth-token'] ?? null,
    secretOrKey: process.env.JWT_SECRET,
  },
  async (payload, done) => {
    try {
      if (payload) {
        done(null, payload);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  }
);

passport.use(jwtLogin);
