const express = require("express");
require("express-async-errors");

const cors = require("cors");
const helmet = require("helmet");
const authMiddleware = require("./middlewares/authMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");





const authController = require("./controllers/authController");
const settingsController = require("./controllers/settingsController");


const app = express();

// Middlewares de Configuraçao
app.use(cors());
app.use(helmet());
app.use(express.json());

// Middlewares de Processamento
app.post("/login", authController.doLogin);


app.use("/settings", authMiddleware, settingsController.getSettings);












app.post("/logout", authController.doLogout);

// Middleware de tratamento de Erros
app.use(errorMiddleware);

module.exports = app;
