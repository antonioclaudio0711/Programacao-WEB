const sequelize = require('../../database');
const Ator = require('./ator');
const Filme = require('./filme');

const models = {
    Ator,
    Filme
};

sequelize.sync({alter: true});

module.exports = models;