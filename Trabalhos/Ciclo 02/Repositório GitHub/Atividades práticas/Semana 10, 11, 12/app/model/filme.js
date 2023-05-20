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
    },
    fk_ator: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Ator',
            key: 'id_ator'
        }
    }
})

module.exports = Filme;