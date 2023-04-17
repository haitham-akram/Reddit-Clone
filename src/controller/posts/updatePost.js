/* eslint-disable camelcase */
const updatePost = require('../../database/queries/post/updatePost');
const updateSchema = require('../../utils/validation/posts/updatePost.validation');

const updatePosts = (req, res, next) => {
  updateSchema
    .validateAsync(req.body)
    .then((validated) => {
      if (validated.images === '') {
        const { title, content } = validated;
        return updatePost({ title, content }, req.params.id);
      }
      return updatePost(validated, req.params.id);
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
