const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    items: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Item;