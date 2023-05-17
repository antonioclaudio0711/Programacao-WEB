const sequelize = require('../../database');
const Administrador = require('./Administrador');

const models = {
    Administrador
};

const options = {
    alter: true,
};

sequelize.sync(options);

module.exports = models;