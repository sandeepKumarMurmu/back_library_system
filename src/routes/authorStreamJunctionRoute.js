// ----------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// ----------------------------------------------------------------------------------------------------------
// importing controllers
const authorStreamController = require("../controllers/author_stream_junction/create_author_stream_junction");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// ----------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  authorStreamController.createAuthorStream
);

module.exports = route;
