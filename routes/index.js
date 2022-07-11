const express = require("express").Router();

const apiRoutes = require("./notes");
const htmlRoutes = require("./htmlroutes");

express.use("/api", apiRoutes);
express.use("/", htmlRoutes);

module.exports = express;