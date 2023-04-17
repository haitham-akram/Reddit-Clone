const express = require('express');

const router = express.Router();
const postRouter = require('./post');
const authRouter = require('./auth');

router.use(authRouter);
router.use(postRouter);

module.exports = { router };
