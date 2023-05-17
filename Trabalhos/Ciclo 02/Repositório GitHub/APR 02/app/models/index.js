const sequelize = require('../../database');
const Paciente = require('./Paciente');
const Agendamento = require('./Agendamento');

const models = {
    Paciente,
    Agendamento
};

Paciente.hasMany(Agendamento, {foreignKey: 'fk_paciente', as: 'agendamentos'});
Agendamento.belongsTo(Paciente, {foreignKey: 'fk_agendamento', as: 'pacientes'});

const options = {
    alter: true,
    beforeAssociate: async (sequelizeInstance) => {
        await Paciente.init({}, {sequelize: sequelizeInstance});
        await Paciente.sync();
    }
}

sequelize.sync(options);

module.exports = models;
