const express = require('express');

const votesRouter = express.Router();
const authUser = require('../middleware/authenticatedUser');
const voting = require('../controller/votes/vote');

votesRouter.post('/vote/:id', authUser, voting);

module.exports = votesRouter;
