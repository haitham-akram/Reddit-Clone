const { join } = require('path');

const getSignInPage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'public', 'html', 'auth', 'login.html'),
  );
};
module.exports = getSignInPage;
