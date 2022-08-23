// importing Route module from library
const express = require("express");

// importing controllers
const streamController = require("../controllers/stream/streamController");

// initialing route
const route = express.Router();

route.post("/entry", streamController.createStream);
route.post("/get", streamController.getStream);

module.exports = route;
