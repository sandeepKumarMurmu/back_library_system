// ----------------------------------------------------------------------------------------------------------------------------------------
// connection file
const connection = require("../config/connection");

// ----------------------------------------------------------------------------------------------------------------------------------------
// importing from library
const { DataTypes } = require("sequelize");

// ----------------------------------------------------------------------------------------------------------------------------------------
// creating and exporting book model
module.exports = connection.define(
  "book",
  {
    bookId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    bookTitle: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    bookQuantity: { type: DataTypes.INTEGER, allowNull: false },
    bookCatogery: { type: DataTypes.STRING(20) },
    bookStatus: { type: DataTypes.BOOLEAN },
  },
  { timestamps: true }
);
