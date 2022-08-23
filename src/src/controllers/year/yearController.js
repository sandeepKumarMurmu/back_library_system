// ----------------------------------------------------------------------------------------------------------------------
// year model
const yearModel = require("../../models/yearModel");

// ----------------------------------------------------------------------------------------------------------------------
// exporting controller
module.exports = {
  // ----------------------------------------------------------------------------------------------------------------------
  // creationg year controller
  createYear: async (req, res) => {
    const { year } = req.body;
    try {
      const yearData = await yearModel.create({ yearName: year });

      return res
        .status(200)
        .json({ message: "year created", data: yearData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat year conrtoller",
        data: null,
        status: false,
      });
    }
  },
  // ----------------------------------------------------------------------------------------------------------------------
  // getting year controller
  getYear: async (req, res) => {
    const { year } = req.body;
    try {
      const yearData = await yearModel.findAll();

      return res
        .status(200)
        .json({ message: "year recived", data: yearData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside get year conrtoller",
        data: null,
        status: false,
      });
    }
  },
};
