require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.POSTGRES_PASSWORD,
    "database": "postgres",
    "host": "db",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}