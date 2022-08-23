// -----------------------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// -----------------------------------------------------------------------------------------------------------------
// importing controllers
const yearController = require("../controllers/year/yearController");

// -----------------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// -----------------------------------------------------------------------------------------------------------------
// end points
route.post("/entry", yearController.createYear);
route.get("/get", yearController.getYear);

module.exports = route;
