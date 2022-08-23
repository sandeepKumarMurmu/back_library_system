// ----------------------------------------------------------------------------------------------------------
// importing year model
const authorstreamJunction = require("../../models/author_stream_junction");

module.exports = {
  // ----------------------------------------------------------------------------------------------------------
  // create controller
  createAuthorStream: async (req, res) => {
    try {
      const authorStreamJunctionData = await authorstreamJunction.create(
        req.body
      );

      return res.status(200).json({
        message: "authorStreamJunctionData created",
        data: authorStreamJunctionData,
        status: true,
      });
    } catch (e) {
      return res.status(400).json({
        message:
          "something wrong inside creat authorStreamJunctionData conrtoller",
        data: null,
        status: false,
      });
    }
  },
};
