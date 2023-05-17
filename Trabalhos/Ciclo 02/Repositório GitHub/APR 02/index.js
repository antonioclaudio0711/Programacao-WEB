const express = require('express');
const app = express();
app.use(express.json());

const PacienteController = require('./app/controllers/paciente_controller');
const pacienteController = new PacienteController();

const AgendamentoController = require('./app/controllers/agendamento_controller');
const agendamentoController = new AgendamentoController();

app.get('/', (req, res) => {
    res.send('Bem-vindo à API referente ao trabalho Aprendendo a resolver problemas (ciclo 02)');
})

//API Paciente
app.get('/pacientes', (req, res) => pacienteController.encontrarTodosPacientes(req, res));
app.get('/pacientes/:id_paciente', (req, res) => pacienteController.encontrarPacientesPorId(req, res));
app.post('/pacientes', (req, res) => pacienteController.criarPaciente(req, res));
app.put('/pacientes/:id_paciente', (req, res) => pacienteController.atualizarPaciente(req, res));
app.delete('/pacientes/:id_paciente', (req, res) => pacienteController.excluirPaciente(req, res));

//API Agendamentos
app.get('/agendamentos', (req, res) => agendamentoController.encontrarTodosAgendamentos(req, res));
app.get('/agendamentos/:id', (req, res) => agendamentoController.encontrarAgendamentosPorId(req, res));
app.post('/agendamentos', (req, res) => agendamentoController.criarAgendamento(req, res));
app.put('/agendamentos/:id', (req, res) => agendamentoController.atualizarAgendamento(req, res));
app.delete('/agendamentos/:id', (req, res) => agendamentoController.excluirAgendamento(req, res));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})