const dbConnection = require('../../config/connection');

const getPost = () => dbConnection.query(
  `select post.id, post.title, post.content, post.images, post.user_id, post.created_at, users.username,
  COUNT(votes.id) filter (where votes.post_id = post.id and votes.type = 'up') as upVotes,
  COUNT(votes.id) filter (where votes.post_id = post.id and votes.type = 'down') as downVotes
  from posts post join users on users.id = post.user_id left join votes on votes.post_id = post.id
  group by post.id, users.username  order by upVotes desc;`,
);
module.exports = getPost;
