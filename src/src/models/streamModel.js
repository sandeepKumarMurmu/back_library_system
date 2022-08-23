// connection file
const connection = require("../config/connection");

// importing from library
const { DataTypes } = require("sequelize");

// creating and exporting stram model
module.exports = connection.define(
  "stream",
  {
    streamId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    streamName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    streamCode: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
  },
  { timestamps: true }
);
