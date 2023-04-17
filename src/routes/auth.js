const express = require('express');

const router = express.Router();
const { signUp, signIn, logOut } = require('../controller');

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.get('/logOut', logOut);
module.exports = router;
