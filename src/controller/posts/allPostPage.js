const { join } = require('path');

const allPostsPage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'public', 'html', 'home', 'index.html'),
  );
};
module.exports = allPostsPage;
