// import requirements
const express = require("express");
const connect = require("./database/connection");

// allows you to make cross PORT requests
const cors = require("cors");

// import dotenv and configure its path
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;

// create express instance
const app = express();
app.use(express.json());
app.use(cors());

// database connection
connect();

// routes
app.use("/api", require("./router/router"));

// specify port to listen on
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
