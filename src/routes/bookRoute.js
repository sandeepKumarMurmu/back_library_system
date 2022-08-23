// -----------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// -----------------------------------------------------------------------------------------------------------
// importing controllers
const bookController = require("../controllers/book/bookController");

// -----------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// -----------------------------------------------------------------------------------------------------------
// creating book end points
route.post("/", bookController.createBook);

// -----------------------------------------------------------------------------------------------------------
// exporting book route
module.exports = route;
