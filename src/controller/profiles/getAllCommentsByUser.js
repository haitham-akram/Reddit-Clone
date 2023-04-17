const getCommentByUser = require('../../database/queries/profile/getAllCommentsByUser');

const getCommentsByUser = (req, res, next) => {
  getCommentByUser(req.params.username)
    .then((data) => res.json({
      error: false,
      data: data.rows,
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getCommentsByUser;
