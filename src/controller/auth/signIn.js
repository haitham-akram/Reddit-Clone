require('env2')('.env');
const { compare } = require('bcrypt');
const { getUser } = require('../../database/queries/auth');
const signInSchema = require('../../utils/validation/login.validation');
const { generateToken } = require('../../utils/helpers/authToken');
const CustomError = require('../../utils/helpers/customError');

const signIn = (req, res, next) => {
  signInSchema
    .validateAsync(req.body)
    .then((validated) => getUser(validated.email))
    .then((userData) => {
      if (userData.rowCount === 0) {
        throw new CustomError(400, 'Email is invalid');
      }
      // eslint-disable-next-line prefer-destructuring
      req.user = userData.rows[0];
      return compare(req.body.password, userData.rows[0].password);
    })
    .then((isValid) => {
      if (!isValid) throw new CustomError(400, 'password is incorrect');
      return generateToken({ id: req.user.id, username: req.user.username });
    })
    .then((token) => res.cookie('token', token).status(200).json({
      message: 'User sign in successfully',
      statusCode: 200,
    }))
    .catch((err) => next(err));
};
module.exports = signIn;
