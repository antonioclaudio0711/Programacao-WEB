const {Agendamento: Agendamento} = require('../models');

class AgendamentoController {

    async encontrarTodosAgendamentos(req, res) {
        try {
            const agendamentosEncontrados = await Agendamento.findAll();
            res.status(200).json(agendamentosEncontrados);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async encontrarAgendamentosPorId(req, res) {
        try {
            const id_agendamento = req.params.id_agendamento;
            const agendamentoEncontrado = await Agendamento.findByPk(id_agendamento);

            if (agendamentoEncontrado) {
                res.status(200).json(agendamentoEncontrado);
            } else {
                res.status(404).json({error: 'Agendamento não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async criarAgendamento(req, res) {
        try {
            const criacaoAgendamento = await Agendamento.create(req.body);
            res.status(200).json(criacaoAgendamento);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async atualizarAgendamento(req, res) {
        try {
            const id_agendamento = req.params.id_agendamento;
            const [atualizacaoAgendamento] = await Agendamento.update(req.body, {
                where: {id_agendamento}
            });

            if (condition) {
                res.status(200).json({message: 'Agendamento atualizado com sucesso!'});
            } else {
                req.status(404).json({error: 'Agendamento não encontrado!'});    
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async excluirAgendamento(req, res) {
        try {
            const id_agendamento = req.params.id_agendamento;
            const exclusaoAgendamento = await Agendamento.destroy({
                where: {id_agendamento}
            });

            if (condition) {
                res.status(200).json({message: 'Agendamento excluído com sucesso!'});
            } else {
                res.status(404).json({error: 'Agendamento não encontrado!'});    
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };
};

module.exports = AgendamentoController;