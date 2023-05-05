const logOut = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    res.clearCookie('token').status(200).json({
      statusCode: 200,
      massage: 'the user has been log out successfully',
    });
  } else {
    res.status(401).json({
      massage: 'authenticated',
    });
  }
};
module.exports = logOut;
