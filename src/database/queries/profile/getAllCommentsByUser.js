const dbConnection = require('../../config/connection');

const getCommentByUser = (username) => {
  const sql = {
    text: `select comment.id, comment.content,
    comment.created_at, users.username, comment.post_id, post.title 
    from comments comment 
    join users on users.id = comment.user_id
    join posts post on post.id = comment.post_id
    where users.username = $1;`,
    values: [username],
  };
  return dbConnection.query(sql);
};
module.exports = getCommentByUser;
