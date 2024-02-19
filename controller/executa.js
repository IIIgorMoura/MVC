const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { cateto1, cateto2 } = req.body;
    const hipotesuna = Calculadora.Hipotesuna(
        parseFloat(cateto1), parseFloat(cateto2));
        res.redirect(`/resultado.html?hipotenusa=${hipotesuna}`)
});

module.exports = resultado