const getCommentById = require('../../database/queries/comment/getCommentById');

const getCommentsById = (req, res, next) => {
  getCommentById(req.params.id)
    .then((data) => res.json({
      error: false,
      data: data.rows,
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getCommentsById;
