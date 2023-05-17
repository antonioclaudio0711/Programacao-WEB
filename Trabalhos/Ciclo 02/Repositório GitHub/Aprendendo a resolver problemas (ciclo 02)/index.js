const express = require('express');
const app = express();
app.use(express.json());
const PacienteController = require('./app/controllers/paciente_controller');
const pacienteController = new PacienteController();

app.get('/', (req, res) => {
    res.send('Bem-vindo à API referente ao trabalho Aprendendo a resolver problemas (ciclo 02)');
})

//API Paciente
app.get('/pacientes', (req, res) => pacienteController.encontrarTodosPaciente(req, res));
app.get('/pacientes/:id_paciente', (req, res) => pacienteController.encontrarPacientesPorId(req, res));
app.post('/pacientes', (req, res) => pacienteController.criarPaciente(req, res));
app.put('/pacientes/:id_paciente', (req, res) => pacienteController.atualizarPaciente(req, res));
app.delete('/pacientes/:id_paciente', (req, res) => pacienteController.excluirPaciente(req, res));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})