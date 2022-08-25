const axios = require("axios");

const express = require("express");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

const route = express.Router();

route.get(
  "/need",
  authriseAdmin_Student.verifyTokenMiddle,
  async (req, res) => {
    try {
      const result = await axios.post(
        "http://localhost:8080/api/v1/student-library-system/book/get"
      );

      console.log(result.data);
      return res.json({ data: "connected to need" });
    } catch (e) {
      return res.json({ e, message: "error in test" });
    }
  }
);

module.exports = route;
