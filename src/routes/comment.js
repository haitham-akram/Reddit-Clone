const express = require('express');

const commentRouter = express.Router();

const {
  addComments,
  getCommentsByPost,
  getCommentsById,
  updateComments,
  deleteComments,
} = require('../controller/comments');
const authUser = require('../middleware/authenticatedUser');

commentRouter.get('/post/:id/comments', getCommentsByPost);
commentRouter.get('/comment/:id', getCommentsById);
commentRouter.use(authUser);
commentRouter.post('/comment', addComments);
commentRouter.put('/comment/:id', updateComments);
commentRouter.delete('/comment/:id', deleteComments);
module.exports = commentRouter;
