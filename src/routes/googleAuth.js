import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
const router = Router();


router.get('/', (_, res) => {
  res.send(`
    <a href="/login">Google Login</a>
  `)
})

router.get('/login', passport.authenticate('google', {
    scope: ['profile', 'email']
}));



router.get(
  '/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    failureMessage: true,
    session: false,
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        expiresIn: '1h',
        id: req.user.id,
        name: req.user.displayName,
        picture: req.user._json.picture,
      },
      process.env.JWT_SECRET
    );

    res.cookie('x-auth-token', token);
    res.redirect('/user/info');
  }
);
export default router;
