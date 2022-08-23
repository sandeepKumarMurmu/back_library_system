// ------------------------------------------------------------------------------------------------------------------------------------------------
// model importing
const adminModel = require("../../models/adminModel");

const { comparePassword } = require("../../utils/passwordFunction");
const { verifyToken } = require("../../utils/tokenFunction");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting middleware
module.exports = {
  passwordValidation: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      let oldAdmin = await adminModel.findOne({ where: { adminEmail: email } });

      if (!oldAdmin)
        return res.status(400).json({
          data: [],
          message: "email or password is worng",
          status: false,
        });

      if (!comparePassword(password, oldAdmin.adminPassword))
        return res.status(400).json({
          message: "email or password is not correct",
          data: [],
          status: false,
        });
      req.body.id = oldAdmin.adminId;
      next();
    } catch (e) {
      return res.status(400).json({
        data: [],
        message: "error in authriseAdmin_Student middle ware",
        e,
        status: false,
      });
    }
  },

  // ------------------------------------------------------------------------------------------------------------------------------------------------
  // unique email check
  uniqueEmail: async (req, res, next) => {
    try {
      let oldAdmin = await adminModel.findOne({
        where: { adminEmail: req.body.email },
      });

      if (oldAdmin)
        return res.status(400).json({
          data: [],
          message: "email already exist",
          status: false,
        });

      next();
    } catch (e) {
      return res.status(400).json({
        data: [],
        message: "error in unique email check middle ware",
        e,
        status: false,
      });
    }
  },
  verifyTokenMiddle: async (req, res, next) => {
    try {
      verifyToken(req.headers.token);
      // return res.json({ data: req.body });
      next();
    } catch (e) {
      return res.status(400).json({
        message: "please login again ",
        e: e.message,
        data: [],
        status: false,
      });
    }
  },
};
