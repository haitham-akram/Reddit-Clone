const express = require('express');

const router = express.Router();

const {
  getUser,
  getAllPostsByUser,
  getCommentsByUser,
} = require('../controller/profiles');

router.get('/profile/:username', getUser);
router.get('/profile/posts/:username', getAllPostsByUser);
router.get('/profile/comments/:username', getCommentsByUser);

module.exports = router;
