const express = require('express');

const router = express.Router();

const {
  addComments,
  getCommentsByPost,
  getCommentsById,
  updateComments,
  deleteComments,
} = require('../controller/comments');
const authUser = require('../middleware/authenticatedUser');

router.post('/comments', authUser, addComments);
router.get('/comments/:id', getCommentsByPost);
router.get('/comment/:id', getCommentsById);
router.put('/comment/:id', updateComments);
router.delete('/comment/:id', deleteComments);
module.exports = router;
