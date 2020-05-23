const express = require("express");
const NumbersController = require("./controllers/NumbersController.js");

const routes = express.Router();

routes.post("/api/numbers/store", NumbersController.store);

module.exports = routes;
