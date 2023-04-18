const express = require('express');

const router = express.Router();
const postRouter = require('./post');
const authRouter = require('./auth');
const profileRouter = require('./profile');
const commentRouter = require('./comment');

router.use(authRouter);
router.use(postRouter);
router.use(profileRouter);
router.use(commentRouter);
module.exports = { router };
