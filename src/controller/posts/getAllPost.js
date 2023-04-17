const getPost = require('../../database/queries/post/getPost');

const getAllPosts = (req, res, next) => {
  getPost()
    .then((data) => res.json({
      error: false,
      data: data.rows,
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getAllPosts;
