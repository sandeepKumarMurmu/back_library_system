// importing Route module from library
const express = require("express");

// importing controllers
const streamController = require("../controllers/stream/streamController");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");
const feildValidation = require("../middleWare/validation/feildValidation");

// initialing route
const route = express.Router();

route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  feildValidation.streamValidationInput,
  feildValidation.streamValidationCode,
  streamController.createStream
);
route.post(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  streamController.getStream
);

module.exports = route;
