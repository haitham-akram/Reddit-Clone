const dbConnection = require('../../config/connection');

const deleteComment = (id) => {
  const sql = {
    text: 'delete from comments where id =$1 returning id, content;',
    values: [id],
  };
  return dbConnection.query(sql);
};
module.exports = deleteComment;
