// importing from library
const jwt = require("jsonwebtoken");
require("dotenv").config();

// -----------------------------------------------------------------------------------------------------------------------
// token key
const tokenKey = process.env.TOKEN_KEY;

// -----------------------------------------------------------------------------------------------------------------------
// token function
module.exports = {
  generateToken: (data) => jwt.sign(data, tokenKey, { expiresIn: 60 * 60 }),
  verifyToken: (token) => jwt.verify(token, tokenKey),
};
