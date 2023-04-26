const express = require('express');

const router = express.Router();

const {
  getUser,
  getAllPostsByUser,
  getCommentsByUser,
  profilePage,
} = require('../controller/profiles');
// const authUser = require('../middleware/authenticatedUser');

router.get('/profile/:username', getUser);

router.get('/user-profile/:username', profilePage);

router.get('/profile/posts/:username', getAllPostsByUser);
router.get('/profile/comments/:username', getCommentsByUser);

module.exports = router;
