const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Filme = sequelize.define('Filme', {
    id_filme: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    titulo_filme: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    }
})

module.exports = Filme;