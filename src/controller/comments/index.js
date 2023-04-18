const addComments = require('./addComment');
const getCommentsByPost = require('./getCommentByPost');
const getCommentsById = require('./getCommentById');
const updateComments = require('./updateComment');
const deleteComments = require('./deleteComment');

module.exports = {
  addComments,
  getCommentsByPost,
  getCommentsById,
  updateComments,
  deleteComments,
};
