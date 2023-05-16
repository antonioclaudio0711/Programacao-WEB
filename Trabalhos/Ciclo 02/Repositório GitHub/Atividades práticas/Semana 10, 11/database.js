const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('filmes_database', 'root', 'Acf@07112002', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;