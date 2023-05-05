const { verifyToken } = require('../utils/helpers/authToken');
const CustomError = require('../utils/helpers/customError');

const authUser = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    verifyToken(token)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next(new CustomError(401, 'unauthorized'));
  }
};
module.exports = authUser;
