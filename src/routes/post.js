const express = require('express');

const router = express.Router();

const {
  addNewPost,
  getAllPosts,
  getPostsById,
  updatePost,
  deletePost,
} = require('../controller/posts');
const authUser = require('../middleware/authenticatedUser');

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostsById);
router.post('/posts', authUser, addNewPost);
router.put('/posts/:id', authUser, updatePost);
router.delete('/posts/:id', authUser, deletePost);
module.exports = router;
