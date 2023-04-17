const dbConnection = require('../../config/connection');

const getPostById = (id) => {
  const sql = {
    text: 'select id, title, content, images, user_id, created_at from posts where id = $1;',
    values: [id],
  };
  return dbConnection.query(sql);
};
module.exports = getPostById;
