const deleteComment = require('../../database/queries/comment/deleteComment');
const getCommentById = require('../../database/queries/comment/getCommentById');
const CustomError = require('../../utils/helpers/customError');

const deleteComments = (req, res, next) => {
  const { id } = req.params;
  getCommentById(id)
    .then((comment) => {
      if (!comment.rowCount) {
        throw new CustomError(401, 'Comment not found.');
      }
      return comment.rows[0];
    })
    .then((comment) => {
      if (comment.user_id !== req.user.id) {
        throw new CustomError(401, 'unauthorized');
      }
    })
    .then(() => deleteComment(id))
    .then(() => {
      res.json({ error: false, data: 'comment deleted' });
    })
    .catch((err) => next(err));
};
module.exports = deleteComments;
