// --------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// --------------------------------------------------------------------------------------------------------
// importing controllers
const authorBookController = require("../controllers/author_book_junction/create_author_book_junction");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// --------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  authorBookController.createAuthorBook
);

module.exports = route;
