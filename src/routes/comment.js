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

commentRouter.post('/comment', authUser, addComments);
commentRouter.put('/comment/:id', authUser, updateComments);
commentRouter.delete('/comment/:id', authUser, deleteComments);
module.exports = commentRouter;
