const updateComment = require('../../database/queries/comment/updateComment');
const updateSchema = require('../../utils/validation/comments/updateComment.validation');
const getCommentById = require('../../database/queries/comment/getCommentById');
const CustomError = require('../../utils/helpers/customError');

const updateComments = (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  getCommentById(id)
    .then((comment) => {
      if (!comment.rowCount) {
        throw new CustomError(401, 'Comment not found');
      }
      return comment.rows[0];
    })
    .then((comment) => {
      if (comment.user_id !== req.user.id) {
        throw new CustomError(401, 'unauthorized');
      }
    })
    .then(() => updateSchema.validateAsync({ content }, { abortEarly: false }))
    .then((validated) => updateComment(validated, req.params.id))
    .then((updatedComment) => res.json({
      error: false,
      data: updatedComment.rows[0],
    }))
    .catch((err) => next(err));
};
module.exports = updateComments;
