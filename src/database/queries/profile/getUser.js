const dbConnection = require('../../config/connection');

const getUser = (username) => {
  const sql = {
    text: 'select id,username, email,created_at from users where username = $1',
    values: [username],
  };
  return dbConnection.query(sql);
};
module.exports = getUser;
