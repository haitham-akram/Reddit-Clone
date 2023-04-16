const { sign, verify } = require('jsonwebtoken');
require('env2')('.env');

const generateToken = (payload) => new Promise((resolve, reject) => {
  sign(payload, process.env.SECRET_KEY, (err, token) => {
    if (err) reject(err);
    else resolve(token);
  });
});
const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) reject(err);
    else resolve(decode);
  });
});
module.exports = { generateToken, verifyToken };
