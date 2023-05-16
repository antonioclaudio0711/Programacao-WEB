const {Sequelize, DataType, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Ator = sequelize.define('Ator', {
    id_ator: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }, 
    nome_ator: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    }
})

module.exports = Ator;