// connection file
const connection = require("../config/connection");

// importing from library
const { DataTypes } = require("sequelize");

// creating and exporting studentBookJunction model
module.exports = connection.define(
  "studentBookJunction",
  {
    studentBookJunctionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: true }
);
