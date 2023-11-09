import { Router } from 'express';
import googleAuth from './googleAuth.js';
import userRoute from './api/user.js';

const router = Router();
router.use('/', googleAuth);
router.use('/user', userRoute);

export default router;
