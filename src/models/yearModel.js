// ------------------------------------------------------------------------------------------------------------
// connection file
const connection = require("../config/connection");

// ------------------------------------------------------------------------------------------------------------
// importing from library
const { DataTypes } = require("sequelize");

// ------------------------------------------------------------------------------------------------------------
// creating and exporting year model
module.exports = connection.define("year", {
  yearId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  yearName: {
    type: DataTypes.STRING(6),
    allowNull: false,
  },
});
