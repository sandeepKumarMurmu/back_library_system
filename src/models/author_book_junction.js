// connection file
const connection = require("../config/connection");

// importing from library
const { DataTypes } = require("sequelize");

// creating and exporting authorBookJunction model
module.exports = connection.define(
  "authorBookJunction",
  {
    authorBookJunctionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: true }
);
