// -----------------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// -----------------------------------------------------------------------------------------------------------------
// importing controllers
const yearController = require("../controllers/year/yearController");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// -----------------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// -----------------------------------------------------------------------------------------------------------------
// end points
route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  yearController.createYear
);
route.get(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  yearController.getYear
);

module.exports = route;
