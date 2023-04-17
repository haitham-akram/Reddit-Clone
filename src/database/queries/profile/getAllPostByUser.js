const dbConnection = require('../../config/connection');

const getPostByUser = (username) => {
  const sql = {
    text: `select post.id, post.title, post.content, post.images, post.user_id,
    post.created_at, users.username from posts post join users
    on users.id = post.user_id where users.username = $1;`,
    values: [username],
  };
  return dbConnection.query(sql);
};
module.exports = getPostByUser;
