module.exports = (app) => {
  app.use("*", (req, res) => {
    res
      .status(404)
      .json({ message: "no route found", status: false, data: [] });
  });
};
