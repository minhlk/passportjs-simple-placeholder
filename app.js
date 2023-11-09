import 'dotenv/config'
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.use(cookieParser());

import routes from './src/routes/index.js';
app.use('/', routes)

import passport from 'passport';
app.use(passport.initialize());

require('./src/services/googleStrategy');
require('./src/services/jwtStrategy');

