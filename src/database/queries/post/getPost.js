const dbConnection = require('../../config/connection');

const getPost = () => dbConnection.query(
  'select post.id, post.title, post.content, post.images, post.user_id, post.created_at, users.username from posts post join users on users.id = post.user_id;',
);
module.exports = getPost;
