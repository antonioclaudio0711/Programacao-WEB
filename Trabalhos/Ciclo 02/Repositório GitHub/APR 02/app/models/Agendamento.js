const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../database');

const Agendamento = sequelize.define('Agendamento',  {
    id_agendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    horario_agendamento: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: false
    },
    fk_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'paciente',
            key: 'id_paciente'
        }
    }
});

module.exports = Agendamento;

