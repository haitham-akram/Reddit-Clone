const deletePost = require('../../database/queries/post/deletePost');

const deletePosts = (req, res, next) => {
  deletePost(req.params.id)
    .then((deletedPost) => res.json({
      error: false,
      data: deletedPost.rows[0],
    }))
    .catch((err) => next(err));
};
module.exports = deletePosts;
