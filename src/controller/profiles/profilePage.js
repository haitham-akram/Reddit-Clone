const { join } = require('path');

const profilePage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'public', 'html', 'profile', 'index.html'),
  );
};
module.exports = profilePage;
