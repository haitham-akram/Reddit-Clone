const express = require('express');

const votesRouter = express.Router();
const authUser = require('../middleware/authenticatedUser');
const voting = require('../controller/votes/vote');

votesRouter.use(authUser);
votesRouter.post('/vote/:id', voting);

module.exports = votesRouter;
