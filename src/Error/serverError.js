const CustomError = require('../utils/helpers/customError');

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  const { status, message } = err;
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: true,
      data: { message },
    });
  }
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: true,
      data: {
        message: 'Unauthorized',
      },
    });
  }
  if (err instanceof CustomError) {
    return res.status(status).json({
      error: true,
      data: {
        message,
      },
    });
  }
  return res.status(500).json({
    error: true,
    data: {
      message: 'Internal server error',
    },
  });
};
module.exports = serverError;
