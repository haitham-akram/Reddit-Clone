const dbConnection = require('../../config/connection');

const getPostById = (id) => {
  const sql = {
    text: 'select id, title, content, images, user_id, created_at from posts where id = $1;',
    values: [id],
  };
  return dbConnection.query(sql);
};
module.exports = getPostById;
// I will use this later
/* text: 'select post.id, post.title, post.content, post.images, post.user_id,
 post.created_at, users.username from posts post join users
 on users.id = post.user_id where post.user_id = $1;', */
