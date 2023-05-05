/* eslint-disable camelcase */
const addPost = require('../../database/queries/post/addPost');
const addSchema = require('../../utils/validation/posts/addPost.validation');

const addNewPost = (req, res, next) => {
  const { title, content, images } = req.body;
  const { id: user_id } = req.user;
  addSchema
    .validateAsync({
      title,
      content,
      images,
      user_id,
    })
    .then((validated) => addPost(validated))
    .then((newPost) => res.json({
      error: false,
      data: {
        upvotes: 0,
        downvotes: 0,
        username: req.user.username,
        ...newPost.rows[0],
      },
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = addNewPost;
