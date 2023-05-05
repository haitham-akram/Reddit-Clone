const { Pool } = require('pg');
require('env2')('.env');

let dbUrl = '';
let ssl = false;
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.Test_DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DEV_DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DB_URL;
  ssl = true;
}
if (!dbUrl) throw new Error('No Database URL!');

const options = {
  connectionString: dbUrl,
  ssl,
};

const dbConnection = new Pool(options);
module.exports = dbConnection;
