const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('banco_de_dados_arp01', 'root', 'root', {
    host: "127.0.0.1",
    dialect: "mysql",
});

module.exports = sequelize;