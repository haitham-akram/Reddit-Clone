const dbConnection = require('../../config/connection');

const deleteVote = (id) => {
  const sql = {
    text: 'delete from votes where id = $1 returning id, type;',
    values: [id],
  };
  return dbConnection.query(sql);
};
module.exports = deleteVote;
