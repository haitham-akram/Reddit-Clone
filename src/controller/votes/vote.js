/* eslint-disable camelcase */
const {
  addVote,
  updateVote,
  getVoteById,
  deleteVote,
} = require('../../database/queries/votes');

const voting = (req, res, next) => {
  const { id: post_id } = req.params;
  const { id: user_id } = req.user;
  const { vote_type } = req.body;
  getVoteById(post_id, user_id)
    .then((vote) => {
      if (!vote.rowCount) {
        return addVote({ user_id, vote_type, post_id });
      }
      if (vote.rows[0].type === vote_type) {
        return deleteVote(vote.rows[0].id);
      }
      return updateVote({ user_id, vote_type, post_id }, vote.rows[0].id);
    })
    .then((vote) => {
      res.json({ error: false, data: vote.rows[0] });
    })
    .catch((err) => next(err));
};
module.exports = voting;
