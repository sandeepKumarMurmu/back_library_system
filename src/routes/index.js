const baseRoute = "/api/v1/student-library-system";

// main route function
module.exports = (app) => {
  app.use(baseRoute + "/admin", require("./adminRoute"));
  app.use(baseRoute + "/year", require("./yearRoute"));
  app.use(baseRoute + "/stream", require("./streamRoute"));
  app.use(baseRoute + "/student", require("./studentRoute"));
  app.use(baseRoute + "/book-entry", require("./bookRoute"));
  app.use(baseRoute + "/author", require("./authorRoute"));
  app.use(baseRoute + "/author-book", require("./authorBookJunctionRoute"));
  app.use(baseRoute + "/author-stream", require("./authorStreamJunctionRoute"));
  app.use(baseRoute + "/book-student", require("./studentBookJunctionRoute"));
};
