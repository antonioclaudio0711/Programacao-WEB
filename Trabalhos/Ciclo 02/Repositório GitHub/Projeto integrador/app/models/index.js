const sequelize = require('../../database');
const Administrador = require('./Administrador');
const Usuario = require('./Usuario');

const models = {
    Administrador,
    Usuario
};

const options = {
    alter: true,
};

sequelize.sync(options);

module.exports = models;