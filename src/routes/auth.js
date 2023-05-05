const express = require('express');

const router = express.Router();
const {
  signUp,
  signIn,
  logOut,
  getSignUpPage,
  getSignInPage,
} = require('../controller/auth');

router.get('/signUp', getSignUpPage);
router.post('/signUp', signUp);
router.get('/signIn', getSignInPage);
router.post('/signIn', signIn);
router.get('/logOut', logOut);
module.exports = router;
