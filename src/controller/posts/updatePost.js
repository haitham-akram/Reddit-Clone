/* eslint-disable camelcase */
const updatePost = require('../../database/queries/post/updatePost');
const updateSchema = require('../../utils/validation/posts/updatePost.validation');
const getPostById = require('../../database/queries/post/getPostById');
const CustomError = require('../../utils/helpers/customError');

const updatePosts = (req, res, next) => {
  const { id: postID } = req.params;
  getPostById(postID)
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
    .then(() => updateSchema.validateAsync(req.body))
    .then((validated) => {
      if (validated.images === '') {
        const { title, content } = validated;
        return updatePost({ title, content }, postID);
      }
      return updatePost(validated, postID);
    })
    .then((updatedPost) => {
      const { username } = req.user;
      const {
        id, title, content, images, user_id, created_at,
      } = updatedPost.rows[0];
      return res.json({
        error: false,
        data: {
          id,
          title,
          content,
          images,
          user_id,
          created_at,
          username,
        },
      });
    })
    .catch((err) => next(err));
};
module.exports = updatePosts;
