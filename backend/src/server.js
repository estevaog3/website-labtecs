const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.Server(app);

const uri = "mongodb://localhost/test";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => console.error("Database connection error:"));

db.once("open", () => {
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  server.listen(3333);

  console.log("Servidor conectado. Ouvindo na porta 3333");
});
