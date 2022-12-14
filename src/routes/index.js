const baseRoute = process.env.BASE_URL;

// main route function
module.exports = (app) => {
  app.use(baseRoute + "/admin", require("./adminRoute"));
  app.use(baseRoute + "/year", require("./yearRoute"));
  app.use(baseRoute + "/stream", require("./streamRoute"));
  app.use(baseRoute + "/student", require("./studentRoute"));
  app.use(baseRoute + "/book", require("./bookRoute"));
  app.use(baseRoute + "/author", require("./authorRoute"));
  app.use(baseRoute + "/author-book", require("./authorBookJunctionRoute"));
  app.use(baseRoute + "/author-stream", require("./authorStreamJunctionRoute"));
  app.use(baseRoute + "/book-student", require("./studentBookJunctionRoute"));
  app.use(baseRoute + "/test", require("./test"));
};
