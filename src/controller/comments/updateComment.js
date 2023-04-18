const updateComment = require('../../database/queries/comment/updateComment');
const updateSchema = require('../../utils/validation/comments/updateComment.validation');

const updateComments = (req, res, next) => {
  const { content } = req.body;
  updateSchema
    .validateAsync({ content }, { abortEarly: false })
    .then((validated) => updateComment(validated, req.params.id))
    .then((updatedComment) => res.json({
      error: false,
      data: updatedComment.rows[0],
    }))
    .catch((err) => next(err));
};
module.exports = updateComments;
