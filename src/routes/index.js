const express = require('express');

const router = express.Router();
const postRouter = require('./post');
const authRouter = require('./auth');
const profileRouter = require('./profile');

router.use(authRouter);
router.use(postRouter);
router.use(profileRouter);

module.exports = { router };
