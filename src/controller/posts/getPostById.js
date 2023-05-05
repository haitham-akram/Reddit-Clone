const getPostById = require('../../database/queries/post/getPostById');

const getPostsById = (req, res, next) => {
  getPostById(req.params.id)
    .then((data) => res.json({
      error: false,
      data: data.rows,
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getPostsById;
