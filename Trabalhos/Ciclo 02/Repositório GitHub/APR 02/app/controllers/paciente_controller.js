const {Paciente:Paciente, Agendamento:Agendamento} = require('../models');

class PacienteController {
    constructor() {};

    async encontrarTodosPacientes (req, res) {
        try {
            const pacientesEncontrados = await Paciente.findAll({include: {model: Agendamento, as: 'agendamentos'}});
            res.status(200).json(pacientesEncontrados);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async encontrarPacientesPorId (req, res) {
        try {
            const id_paciente = req.params.id_paciente;
            const pacienteEncontrado = await Paciente.findByPK(id_paciente, {include: {model: Agendamento, as: 'agendamentos'}});

            if (pacienteEncontrado) {
                res.status(200).json(pacienteEncontrado);
            } else {
                res.status(404).json({message: 'Paciente não encontrado!'});
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async criarPaciente (req, res) {
        try {
            const criacaoPaciente = await Paciente.create(req.body); 
            res.status(200).json(criacaoPaciente);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async atualizarPaciente (req, res) {
        try {
            const id_paciente = req.params.id_paciente;
            const [atualizacaoPaciente] = await Paciente.update(req.body, {
                where: {id_paciente}
            })

            if(atualizacaoPaciente) {
                res.status(200).json({message: 'Paciente atualizado com sucesso!'});
            } else {
                res.status(404).json({error: 'Paciente não encontrado!'});
            }

            res.status(stati)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async excluirPaciente (req, res) {
        try {
            const id_paciente = req.params.id_paciente;
            const exclusaoPaciente = await Paciente.destroy({
                where: {id_paciente}
            });

            if (exclusaoPaciente) {
                res.status(200).json({message: 'Paciente excluído com sucesso!'});
            } else {
                res.status(404).json({message: 'Paciente não encontrado!'});
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };
};

module.exports = PacienteController;