const dbConnection = require('../../config/connection');

const getVoteById = (postId, userId) => {
  const sql = {
    text: 'select * from votes where post_id = $1 and user_id = $2',
    values: [postId, userId],
  };
  return dbConnection.query(sql);
};
module.exports = getVoteById;
