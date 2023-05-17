const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Paciente = sequelize.define('Paciente', {
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome_paciente: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: false,
    },
    nr_cartao: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Paciente;