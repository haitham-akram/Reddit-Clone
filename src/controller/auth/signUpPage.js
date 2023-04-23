const { join } = require('path');

const getSignUpPage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'public', 'html', 'auth', 'signUp.html'),
  );
};
module.exports = getSignUpPage;
