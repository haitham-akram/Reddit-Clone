/* eslint-disable camelcase */
const dbConnection = require('../../config/connection');

const addPost = (data) => {
  const {
    title, content, images, user_id,
  } = data;
  const sql = {
    text: 'insert into posts (title,content,images,user_id) values ($1,$2,$3,$4) returning id,title,content,images,user_id;',
    values: [title, content, images, user_id],
  };
  return dbConnection.query(sql);
};
module.exports = addPost;
