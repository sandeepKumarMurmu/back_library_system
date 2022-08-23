// ---------------------------------------------------------------------------------------------------
// importing Route module from library
const express = require("express");

// ---------------------------------------------------------------------------------------------------
// importing controllers
const studentBookJunction = require("../controllers/student_book_junction/student_book_junction");
// ---------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();
// ---------------------------------------------------------------------------------------------------
// routes
route.get("/get", studentBookJunction.destroyStudentBookJunction);
route.post("/entry", studentBookJunction.creatStudentBookJunction);
// route.post("/update", studentBookJunction.creatStudentBookJunction);

module.exports = route;
