const getPostByUser = require('../../database/queries/profile/getAllPostByUser');

const getAllPostsByUser = (req, res, next) => {
  getPostByUser(req.params.username)
    .then((data) => res.json({
      error: false,
      data: data.rows,
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getAllPostsByUser;
