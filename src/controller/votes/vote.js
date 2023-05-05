/* eslint-disable camelcase */
const {
  addVote,
  updateVote,
  getVoteById,
  deleteVote,
  getPostVote,
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
      req.vote = vote.rows[0].type;
      return getPostVote(post_id);
    })
    .then((data) => {
      const allVoteCount = data.rows[0].up_votes_count - data.rows[0].down_votes_count;
      res.json({
        error: false,
        data: { type: req.vote, allVoteCount, ...data.rows[0] },
      });
    })
    .catch((err) => next(err));
};
module.exports = voting;
