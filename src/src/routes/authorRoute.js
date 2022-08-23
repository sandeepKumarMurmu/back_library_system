// importing Route module from library
const express = require("express");

// importing controllers
const authorController = require("../controllers/author/authorConroller");

// initialing route
const route = express.Router();

route.get("/get/:id", authorController.getAuthorbyId);
route.get("/update/:id", authorController.updateAuthor);
route.get("/get", authorController.getBySearch);
route.post("/entry", authorController.createAuthor);

module.exports = route;
