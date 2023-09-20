const express = require("express");
require("express-async-errors");

const cors = require("cors");
const helmet = require("helmet");

const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

// Middlewares de Configuraçao
app.use(cors());
app.use(helmet());
app.use(express.json());

// Middlewares de Processamento
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  res.sendStatus(200);
});

app.post("/logout", (req, res, next) => {
  res.sendStatus(200);
});

// Middleware de tratamento de Erros
app.use(errorMiddleware);

module.exports = app;
