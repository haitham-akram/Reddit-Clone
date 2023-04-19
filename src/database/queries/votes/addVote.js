/* eslint-disable camelcase */
const dbConnection = require('../../config/connection');

const addVote = (data) => {
  const { vote_type, user_id, post_id } = data;
  const sql = {
    text: 'insert into votes (type,user_id,post_id) values($1,$2,$3) returning id,type,user_id,post_id',
    values: [vote_type, user_id, post_id],
  };
  return dbConnection.query(sql);
};
module.exports = addVote;
