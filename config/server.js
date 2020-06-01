//Adicionando a referencia  ao express 
const express = require('express');
//Adicionando a referencia do consign
const consign = require('consign');
//Adicionando a referencia do body-parser
const body_parser = require('body-parser');
//Adicionando a referencia do dotenv-safe
const dotenv_safe = require("dotenv-safe");

//*** Configurando o Express ***
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set(body_parser.urlencoded({extended: true}));
//*** Configurando o dotenv-safe */
dotenv_safe.config();

//Configurando as rotas
consign()
    .include('src/route/')
    .then('src/services/')
    .into(app);

//Exportando o módulo do servidor
module.exports = app;





