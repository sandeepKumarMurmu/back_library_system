// connection file
const connection = require("../config/connection");

// importing from library
const { DataTypes } = require("sequelize");

// creating and exporting author model
module.exports = connection.define(
  "author",
  {
    authorId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    authorName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

    authorCatogery: { type: DataTypes.STRING(20) },
  },
  { timestamps: true }
);
