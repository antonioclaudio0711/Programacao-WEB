const sequelize = require('../../database');
const Paciente = require('./Paciente');

const models = {
    Paciente
};

sequelize.sync({alter: true});

module.exports = models;
