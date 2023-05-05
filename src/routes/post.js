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

postRouter.get('/', getAllPosts);
postRouter.get('/posts', getAllPosts);
postRouter.get('/posts/:id', getPostsById);
postRouter.post('/posts', authUser, addNewPost);
postRouter.put('/posts/:id', authUser, updatePost);
postRouter.delete('/posts/:id', authUser, deletePost);
module.exports = postRouter;
