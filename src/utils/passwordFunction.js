// --------------------------------------------------------------------------------------------------------------------------
// import from library
require("dotenv").config();
const bcrypt = require("bcryptjs");

// ---------------------------------------------------------------------------------------------------------
//salt data
const salt = process.env.SALT;
// ---------------------------------------------------------------------------------------------------------
// password validation and creation
module.exports = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, +salt);
  },
  comparePassword: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  },
};
