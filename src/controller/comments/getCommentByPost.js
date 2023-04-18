const getComment = require('../../database/queries/comment/getAllComment');

const getCommentsByPost = (req, res, next) => {
  getComment(req.params.id)
    .then((data) => res.json({
      error: false,
      data: data.rows,
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getCommentsByPost;
