const deleteComment = require('../../database/queries/comment/deleteComment');

const deleteComments = (req, res, next) => {
  deleteComment(req.params.id)
    .then((deletedComment) => {
      res.json({ error: false, data: deletedComment.rows[0] });
    })
    .catch((err) => next(err));
};
module.exports = deleteComments;
