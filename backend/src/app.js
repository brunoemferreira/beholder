const express = require("express");


const cors = require("cors");
const helmet = require("helmet");




const app = express();

// Middlewares de Configuraçao
app.use(cors());
app.use(helmet());
app.use(express.json());


// Middlewares de Processamento 



module.exports = app;