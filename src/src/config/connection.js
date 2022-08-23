// importing from library
require("dotenv").config();
const { Sequelize } = require("sequelize");

// getting connection credentials from env file
const password = process.env.PASSWORD;
const user = process.env.USER;
const host = process.env.HOST;
const database = process.env.DATABASE;
const database_dev = process.env.DATABASE_DEV;
const dialect = process.env.DIALECT;

// making connection to database and exporting the connection
// module.exports = new Sequelize(database, user, password, {
//   host,
//   dialect,
//   logging: false,
// });

module.exports = new Sequelize(database_dev, user, password, {
  host,
  dialect,
  logging: false,
});
