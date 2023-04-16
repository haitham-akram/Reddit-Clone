require('env2')('.env');
const { hash } = require('bcrypt');

const { addUser, getUser } = require('../../database/queries/auth');
const signUpSchema = require('../../utils/validation/signUp.validation');
const { generateToken } = require('../../utils/helpers/authToken');
const CustomError = require('../../utils/helpers/customError');

const signUp = (req, res) => {
  const { username, password, email } = req.body;
  signUpSchema
    .validateAsync(req.body)
    .then((validated) => getUser(validated.email))
    .then((userData) => {
      if (userData.rowCount > 0) {
        throw new CustomError(400, 'this email is already used.');
      }
      return hash(password, 10);
    })
    .then((Password) => addUser({ username, email, Password }))
    .then((newUserData) => {
      // eslint-disable-next-line prefer-destructuring
      req.user = newUserData.rows[0];
      return generateToken({ id: req.user.id, username: req.user.username });
    })
    .then((token) => {
      res.cookie('token', token).status(200).json({
        statusCode: 200,
        massage: 'the user has been sign up successfully',
        rows: req.user,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400 || err.status).json({
          msg: err.message,
          statusCode: 400,
        });
      }
      return res.status(500 || err.status).json({
        msg: err.message,
        statusCode: err.status || 500,
      });
    });
};
module.exports = signUp;
