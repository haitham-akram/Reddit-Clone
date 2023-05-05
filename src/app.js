const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
require('env2')('.env');
const { router } = require('./routes/index');
const serverError = require('./Error/serverError');

const app = express();
app.disabled('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use(compression());
app.use(cookieParser());

app.use(router);
app.use(serverError);
module.exports = app;
