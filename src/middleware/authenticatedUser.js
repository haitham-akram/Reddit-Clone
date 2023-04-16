const { verifyToken } = require('../utils/helpers/authToken');

const authenticatedUser = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    verifyToken(token)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        if (err.name === 'JsonWebTokenError') {
          res.send({
            message: 'Invalid or expired access token',
            statusCode: 401,
          });
        }
        res.send({
          message:
            err.message || 'you are not authorized to access this resource',
          statusCode: err.status || 401,
        });
      });
  } else {
    res.status(401).json({ message: 'authenticated' });
  }
};
module.exports = authenticatedUser;
