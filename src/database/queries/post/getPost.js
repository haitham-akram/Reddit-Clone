const dbConnection = require('../../config/connection');

const getPost = () => dbConnection.query(
  `SELECT
    posts.id,
    posts.title,
    posts.content,
    posts.images,
    posts.user_id,
    posts.created_at,
    users.username,
    COUNT(DISTINCT comments.id) AS comment_count,
    COUNT(
        DISTINCT CASE
            WHEN votes.type = 'up' THEN votes.id
        END
    ) AS upVotes,
    COUNT(
        DISTINCT CASE
            WHEN votes.type = 'down' THEN votes.id
        END
    ) AS downVotes
FROM posts
    JOIN users ON posts.user_id = users.id
    LEFT JOIN comments ON posts.id = comments.post_id
    LEFT JOIN votes ON posts.id = votes.post_id
GROUP BY
    posts.id,
    users.username
ORDER BY COUNT(DISTINCT CASE WHEN votes.type = 'up' THEN votes.id END) - COUNT(DISTINCT CASE WHEN votes.type = 'down' THEN votes.id END) DESC;`,
);
module.exports = getPost;
