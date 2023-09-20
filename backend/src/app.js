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






app.use(errorMiddleware);

module.exports = app;