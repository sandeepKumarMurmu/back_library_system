// importing year model
const streamModel = require("../../models/streamModel");
const studentModel = require("../../models/studentModel");
const yearModel = require("../../models/yearModel");

module.exports = {
  // -----------------------------------------------------------------------------------------
  // get stream controller
  getStream: async (req, res) => {
    try {
      const streamData = await streamModel.findAll({
        include: [
          {
            model: studentModel,
            attributes: {
              exclude: ["createdAt", "updatedAt", "streamId", "yearId"],
            },

            include: [
              {
                model: streamModel,
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
              {
                model: yearModel,
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
            ],
          },
        ],
        attributes: { exclude: ["updatedAt", "createdAt"] },
      });

      return res
        .status(200)
        .json({ message: "stream got", data: streamData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside get stream conrtoller",
        data: null,
        status: false,
      });
    }
  },
  // -----------------------------------------------------------------------------------------
  // create stream controller
  createStream: async (req, res) => {
    const { streamCode, streamName } = req.body;
    try {
      const streamData = await streamModel.create({ streamCode, streamName });

      return res
        .status(200)
        .json({ message: "stream created", data: streamData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat stream conrtoller",
        data: null,
        status: false,
      });
    }
  },
};
