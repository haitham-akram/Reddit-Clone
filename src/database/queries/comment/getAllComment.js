/* eslint-disable camelcase */
const dbConnection = require('../../config/connection');

const getComment = (post_id) => {
  const sql = {
    text: `select comments.id, comments.content,comments.user_id, 
    comments.post_id, comments.created_at, users.username, posts.title
    from comments join posts on posts.id = comments.post_id join users on users.id = comments.user_id
    where comments.post_id = $1`,
    values: [post_id],
  };
  return dbConnection.query(sql);
};
module.exports = getComment;
