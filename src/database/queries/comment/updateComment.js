const dbConnection = require('../../config/connection');

const updateComment = (data, id) => {
  const { content } = data;
  const sql = {
    text: `update comments set content = $1 ,created_at = CURRENT_TIMESTAMP where id = $2
     returning
        comments.id, 
        comments.content, 
        comments.user_id, 
        comments.post_id, 
        comments.created_at,
        (SELECT username FROM users WHERE users.id = comments.user_id) AS username,
        (SELECT title FROM posts WHERE posts.id = comments.post_id) AS title;`,
    values: [content, id],
  };

  return dbConnection.query(sql);
};
module.exports = updateComment;
