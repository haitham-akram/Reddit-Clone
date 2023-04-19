const dbConnection = require('../../config/connection');

const getPostByUser = (username) => {
  const sql = {
    text: `select post.id, post.title, post.content, post.images, post.user_id,
    post.created_at, users.username, 
    COUNT(votes.id) filter (where votes.post_id = post.id and votes.type = 'up') as upVotes,
    COUNT(votes.id) filter (where votes.post_id = post.id and votes.type = 'down') as downVotes
    from posts post join users on users.id = post.user_id 
    left join votes on votes.post_id = post.id
    where users.username = $1
    group by post.id, users.username  order by upVotes desc;`,
    values: [username],
  };
  return dbConnection.query(sql);
};
module.exports = getPostByUser;
