const { readFileSync } = require('fs');
const { join } = require('path');
require('env2')('.env');
const dbConnection = require('./connection');

let sql;
const dbBuilder = () => {
  if (process.env.NODE_ENV === 'test') {
    sql = `${readFileSync(join(__dirname, 'build.sql'), {
      encoding: 'utf8',
    }).toString()}

     ${readFileSync(join(__dirname, 'seeder.sql'), {
    encoding: 'utf8',
  }).toString()}`;
  } else if (process.env.NODE_ENV === 'development') {
    sql = `${readFileSync(join(__dirname, 'build.sql'), {
      encoding: 'utf8',
    }).toString()}
  
       ${readFileSync(join(__dirname, 'seeder.sql'), {
    encoding: 'utf8',
  }).toString()}`;
  } else if (process.env.NODE_ENV === 'production') {
    sql = readFileSync(join(__dirname, 'build.sql'), {
      encoding: 'utf8',
    }).toString();
  }
  return dbConnection.query(sql);
};
module.exports = dbBuilder;
