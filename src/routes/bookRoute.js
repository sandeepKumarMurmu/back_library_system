// -----------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// -----------------------------------------------------------------------------------------------------------
// importing controllers
const bookController = require("../controllers/book/bookController");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// -----------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// -----------------------------------------------------------------------------------------------------------
// creating book end points
route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  bookController.createBook
);
route.get(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  bookController.getBookById
);

// -----------------------------------------------------------------------------------------------------------
// exporting book route
module.exports = route;
