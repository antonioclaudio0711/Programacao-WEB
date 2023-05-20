const sequelize = require('../../database');
const Ator = require('./ator');
const Filme = require('./filme');

const models = {
    Ator,
    Filme
};

Ator.hasMany(Filme, {foreignKey: 'fk_ator', as: 'filmes'});
Filme.belongsTo(Ator, {foreignKey: 'fk_ator', as: 'atores'});

const options = {
    alter: true,
    beforeAssociate: async (sequelizeInstance) => {
        await Paciente.init({}, {sequelize: sequelizeInstance});
        await Paciente.sync();
    }
};

sequelize.sync(options);

module.exports = models;