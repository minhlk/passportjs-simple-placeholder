import { Router } from 'express';
import passport from 'passport';
const router = Router();

router.get(
  '/info',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(` 
      <div style="margin-bottom: 2rem;">
        <a href="/user/logout">Google Logout</a>
      </div>
      <textarea rows="20" cols="100">${JSON.stringify(req.user, null, 4)}</textarea>
    `)
  }
);

router.get('/logout', (req, res) => {
  res.clearCookie('x-auth-token');
  res.send(`
    <a href="/login">Google Login</a>
    <h2>Logged out</h2>
  `)
});

export default router;
