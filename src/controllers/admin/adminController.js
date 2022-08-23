// library methode
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// models
const Admin = require("../../models/adminModel");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter functions
const filters = require("../../utils/functions/filterFunction");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//password function
const { hashPassword } = require("../../utils/passwordFunction");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//generate token
const tokenFunction = require("../../utils/tokenFunction");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//exporting controllers
module.exports = {
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //get Admin by id controller
  getAdminById: async (req, res) => {
    try {
      const adminData = await Admin.findByPk(+req.params.id, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      return res
        .status(200)
        .json({ message: "admin recieved", data: adminData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside  admin conrtoller",
        data: null,
        status: false,
      });
    }
  },
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //get Admin by queries controller
  getAdminBySearch: async (req, res) => {
    const { name, order, orderByName, limit, page } = req.query;
    try {
      const adminData = await Admin.findAndCountAll({
        where: {
          ...filters.stringFilter(name, "adminName", Op.substring),
        },
        attributes: {
          exclude: ["updatedAt", "createdAt", "yearId", "streamId"],
        },
        order: [
          ...filters.orderFitler(order, "adminId"),
          ...filters.orderFitler(orderByName, "adminName"),
        ],

        ...filters.pagination(page, limit),
      });

      return res.status(200).json({
        message: "admin found",
        data: adminData,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside  admin conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //create Admin by queries controller
  createAdmin: async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
      const adminData = await Admin.create({
        adminName: fullName,
        adminEmail: email,
        adminPassword: hashPassword(password),
      });

      return res.status(200).json({
        message: "admin created",
        data: adminData,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat admin conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //login Admin by queries controller
  loginAdmin: async (req, res) => {
    try {
      let token = tokenFunction.generateToken({
        email: req.query.email,
        id: req.query.id,
      });
      return res.status(200).json({
        message: "admin created",
        token,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat admin conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },
};
