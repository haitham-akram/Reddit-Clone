const express = require('express');
const { signUp, signIn, logOut } = require('../controller');

const router = express.Router();

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.get('/logOut', logOut);
module.exports = router;
