require('dotenv').config()
const username = process.env.username;
const password = process.env.password;
const database = process.env.database;
const host = process.env.host;
const dialect = process.env.dialect;

module.exports = 
{
  "development": {
    "username": 'postgres',
    "password": '1234',
    "database": 'ApiNodeJS-Fim',
    "host": 'localhost',
    "dialect": 'postgres'
  },
  "test": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": 'postgres'
  },
  "production": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": 'postgres'
  }
}
