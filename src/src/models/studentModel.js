// connection file
const connection = require("../config/connection");

// importing from library
const { DataTypes } = require("sequelize");

// creating and exporting student model
module.exports = connection.define(
  "student",
  {
    studentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentFullName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    studentEmail: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    studentType: { type: DataTypes.STRING, allowNull: false },
    studentAddress: { type: DataTypes.STRING(100) },
  },
  { timestamps: true }
);
