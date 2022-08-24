// importing Route module from library
const express = require("express");

// importing controllers
const authorController = require("../controllers/author/authorConroller");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");
const errorValidation = require("../middleWare/validation/errorValidation");
const feildValidation = require("../middleWare/validation/feildValidation");

// initialing route
const route = express.Router();

route.get(
  "/get/:id",
  authriseAdmin_Student.verifyTokenMiddle,
  authorController.getAuthorbyId
);
route.get(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  authorController.getBySearch
);
route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  feildValidation.firstNameValidation,
  feildValidation.lastNameValidation,
  errorValidation,
  feildValidation.middleNameValidation,
  authorController.createAuthor
);

module.exports = route;
