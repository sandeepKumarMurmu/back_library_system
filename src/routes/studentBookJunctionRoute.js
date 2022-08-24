// ---------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// ---------------------------------------------------------------------------------------------------
// importing controllers
const studentBookJunction = require("../controllers/student_book_junction/student_book_junction");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");
// ---------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();
// ---------------------------------------------------------------------------------------------------
// routes
route.get(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  studentBookJunction.destroyStudentBookJunction
);
route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  studentBookJunction.creatStudentBookJunction
);
// route.post("/update", studentBookJunction.creatStudentBookJunction);

module.exports = route;
