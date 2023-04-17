const getUser = require('../../database/queries/profile/getUser');

const getUsers = (req, res, next) => {
  getUser(req.params.username)
    .then((data) => res.json({
      error: false,
      data: data.rows[0],
    }))
    .catch((err) => {
      next(err);
    });
};
module.exports = getUsers;
