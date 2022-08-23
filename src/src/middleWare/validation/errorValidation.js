// ----------------------------------------------------------------------------------------------------------------------------------------
// inporting from library
const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length)
      return res
        .status(400)
        .json({ data: errors.map((ele) => ele.msg), status: false });

    // return res.json({ data: "your are in create admin" });
    next();
  } catch (e) {
    return res.status(400).json({
      message: "error in input validation",
      data: [],
      status: false,
      e,
    });
  }
};
