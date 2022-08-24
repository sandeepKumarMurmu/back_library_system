// importing Route module from library
const express = require("express");

// importing controllers
const authorController = require("../controllers/author/authorConroller");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// initialing route
const route = express.Router();

route.get(
  "/get/:id",
  authriseAdmin_Student.verifyTokenMiddle,
  authorController.getAuthorbyId
);
route.get(
  "/update/:id",
  authriseAdmin_Student.verifyTokenMiddle,
  authorController.updateAuthor
);
route.get(
  "/get",
  authriseAdmin_Student.verifyTokenMiddle,
  authorController.getBySearch
);
route.post(
  "/entry",
  authriseAdmin_Student.verifyTokenMiddle,
  authorController.createAuthor
);

module.exports = route;
