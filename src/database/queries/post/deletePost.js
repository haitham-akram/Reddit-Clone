const dbConnection = require('../../config/connection');

const deletePost = (id) => {
  const sql = {
    text: 'delete from posts where id =$1 returning id, title;',
    values: [id],
  };
  return dbConnection.query(sql);
};
module.exports = deletePost;
