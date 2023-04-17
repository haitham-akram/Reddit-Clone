const dbConnection = require('../../config/connection');

const updatePost = (data, id) => {
  const { title, content, images } = data;
  let sql;
  if (images === undefined) {
    sql = {
      text: 'update posts set title = $1, content = $2,created_at = CURRENT_TIMESTAMP where id = $3 returning id, title ,content , images, user_id,created_at',
      values: [title, content, id],
    };
  } else {
    sql = {
      text: 'update posts set title = $1, content = $2, images = $3,created_at = CURRENT_TIMESTAMP where id = $4 returning id, title ,content , images, user_id,created_at',
      values: [title, content, images, id],
    };
  }
  return dbConnection.query(sql);
};
module.exports = updatePost;
