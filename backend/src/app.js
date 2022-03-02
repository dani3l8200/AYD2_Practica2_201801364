// Requirements
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const useRoutes = require("./features/index.routes");

// Middlewares
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
useRoutes(app);

module.exports = app;
