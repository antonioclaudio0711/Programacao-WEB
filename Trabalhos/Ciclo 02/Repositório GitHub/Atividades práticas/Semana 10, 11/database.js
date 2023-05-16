const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('filmes_database', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;