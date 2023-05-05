/* eslint-disable camelcase */
const addComment = require('../../database/queries/comment/addComment');
const addSchema = require('../../utils/validation/comments/addComment.validation');

const addComments = (req, res, next) => {
  const { content, post_id } = req.body;
  const { id: user_id } = req.user;
  addSchema
    .validateAsync({ content, post_id, user_id }, { abortEarly: false })
    .then((validated) => addComment(validated))
    .then((newComment) => {
      res.json({
        error: false,
        data: newComment.rows[0],
      });
    })
    .catch((err) => next(err));
};
module.exports = addComments;
