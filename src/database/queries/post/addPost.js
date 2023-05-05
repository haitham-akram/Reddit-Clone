/* eslint-disable camelcase */
const dbConnection = require('../../config/connection');

const addPost = (data) => {
  const {
    title, content, images, user_id,
  } = data;
  const sql = {
    text: `INSERT INTO posts (title, content, images, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING id, title, content, images, user_id, created_at;`,
    values: [title, content, images, user_id],
  };
  return dbConnection.query(sql);
};
module.exports = addPost;
