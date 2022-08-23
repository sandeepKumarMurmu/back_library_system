// ------------------------------------------------------------------------------------------------------------
// connection file
const connection = require("../config/connection");

// ------------------------------------------------------------------------------------------------------------
// importing from library
const { DataTypes } = require("sequelize");

// ------------------------------------------------------------------------------------------------------------
// creating and exporting admin model
module.exports = connection.define("admin", {
  adminId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  adminName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  adminEmail: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  adminPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
