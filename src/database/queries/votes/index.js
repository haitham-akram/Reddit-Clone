const addVote = require('./addVote');
const updateVote = require('./updateVote');
const deleteVote = require('./deleteVote');
const getVoteById = require('./getVoteById');
const getPostVote = require('./getSinglePostVote');

module.exports = {
  addVote,
  updateVote,
  deleteVote,
  getVoteById,
  getPostVote,
};
