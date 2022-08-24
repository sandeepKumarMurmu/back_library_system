// importing Route module from library
const express = require("express");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing controllers
const adminController = require("../controllers/admin/adminController");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// middleware
const errorValidation = require("../middleWare/validation/errorValidation");
const FeildValidation = require("../middleWare/validation/feildValidation");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// ------------------------------------------------------------------------------------------------------------------------------------------------
// creating end points
route.post(
  "/login",
  FeildValidation.emailValidation,
  errorValidation,
  authriseAdmin_Student.passwordValidation,
  adminController.loginAdmin
);
route.get(
  "/get/:id",
  authriseAdmin_Student.verifyTokenMiddle,
  adminController.getAdminById
);
route.get(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  adminController.getAdminBySearch
);
route.post(
  "/entry",
  FeildValidation.firstNameValidation,
  FeildValidation.middleNameValidation,
  FeildValidation.lastNameValidation,
  FeildValidation.emailValidation,
  errorValidation,
  authriseAdmin_Student.uniqueEmail,
  adminController.createAdmin
);

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting routes
module.exports = route;
