const sequelize = require('../../database');
const Item = require('./item');

const models = {
    Item
};

sequelize.sync({alter: true});

module.exports = models;