const express = require('express');

const postRouter = express.Router();

const {
  addNewPost,
  getAllPosts,
  getPostsById,
  updatePost,
  deletePost,
} = require('../controller/posts');
const authUser = require('../middleware/authenticatedUser');

postRouter.get('/posts', getAllPosts);
postRouter.get('/posts/:id', getPostsById);
postRouter.use(authUser);
postRouter.post('/posts', addNewPost);
postRouter.put('/posts/:id', updatePost);
postRouter.delete('/posts/:id', deletePost);
module.exports = postRouter;
