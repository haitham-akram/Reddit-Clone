const deletePost = require('../../database/queries/post/deletePost');
const getPostById = require('../../database/queries/post/getPostById');
const CustomError = require('../../utils/helpers/customError');

const deletePosts = (req, res, next) => {
  const { id } = req.params;
  getPostById(id)
    .then((post) => {
      if (!post.rowCount) {
        throw new CustomError(401, 'Post not found');
      }
      return post.rows[0];
    })
    .then((post) => {
      if (post.user_id !== req.user.id) {
        throw new CustomError(401, 'unauthorized');
      }
    })
    .then(() => deletePost(id))
    .then(() => res.json({
      error: false,
      data: 'post deleted successfully',
    }))
    .catch((err) => next(err));
};
module.exports = deletePosts;
