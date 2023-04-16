const dbConnection = require('../../config/connection');

const addUser = (data) => {
  const { username, email, Password } = data;
  const sql = {
    text: 'insert into users (username,email,password) values ($1,$2,$3) returning id,username,email',
    values: [username, email, Password],
  };
  return dbConnection.query(sql);
};
module.exports = addUser;
