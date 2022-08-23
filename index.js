// importing from library
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing connections
const { connection } = require("./src/config/index");

// initializing application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
  });

  next();
});

// giving access to all routes / endpoints
require("./src/routes/index")(app);
require("./src/utils/noRoute/noRoute")(app);

// declaring port
const PORT = process.env.PORT || 8080;

// listining on port
app.listen(PORT, async () => {
  try {
    await connection.authenticate();
    console.log(`connecting on Port ${PORT} ----------------`);
  } catch (e) {
    console.log({ e });
  }
});
