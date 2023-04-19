/* eslint-disable camelcase */
const dbConnection = require('../../config/connection');

const updateVote = (data, id) => {
  const { vote_type, user_id, post_id } = data;
  const sql = {
    text: 'update votes set type =$1 ,user_id =$2, post_id=$3 where id = $4 returning id,type,user_id,post_id',
    values: [vote_type, user_id, post_id, id],
  };
  return dbConnection.query(sql);
};
module.exports = updateVote;
