/* eslint-disable camelcase */
const dbConnection = require('../../config/connection');

const addComment = (data) => {
  const { content, post_id, user_id } = data;
  const sql = {
    text: `INSERT INTO comments (content, user_id, post_id)
    VALUES ($1, $2, $3)
    RETURNING 
        comments.id, 
        comments.content, 
        comments.user_id, 
        comments.post_id, 
        comments.created_at,
        (SELECT username FROM users WHERE users.id = comments.user_id) AS username,
        (SELECT title FROM posts WHERE posts.id = comments.post_id) AS title;`,
    values: [content, user_id, post_id],
  };
  return dbConnection.query(sql);
};
module.exports = addComment;
