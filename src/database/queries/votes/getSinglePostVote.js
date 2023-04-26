const dbConnection = require('../../config/connection');

const getPostVote = (id) => {
  const sql = {
    text: `Select posts.id,
    COUNT(
        DISTINCT CASE
            WHEN votes.type = 'up' THEN votes.id
        END
    ) AS up_votes_count,
    COUNT(
        DISTINCT CASE
            WHEN votes.type = 'down' THEN votes.id
        END
    ) AS down_votes_count
    from posts left join votes on posts.id = votes.post_id
    where posts.id = $1
    group by posts.id;
    `,
    values: [id],
  };
  return dbConnection.query(sql);
};
module.exports = getPostVote;
