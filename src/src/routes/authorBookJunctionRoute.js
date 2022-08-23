// --------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// --------------------------------------------------------------------------------------------------------
// importing controllers
const authorBookController = require("../controllers/author_book_junction/create_author_book_junction");

// --------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

route.post("/entry", authorBookController.createAuthorBook);

module.exports = route;
