const express = require('express');
const app = express();
app.use(express.json());

const AdministradorController = require('./app/controllers/administrador_controller');
const administradorController = new AdministradorController(); 

app.get('/', (req, res) => {
    res.send('Bem-vindo à API do projeto integrador PlaTheia!');
});

//API Administradores
app.get('/administradores', (req, res) => administradorController.encontrarTodosAdministradores(req, res));
app.get('/administradores/:id_adm', (req, res) => administradorController.encontrarAdministradoresPorId(req, res));
app.post('/administradores', (req, res) => administradorController.criarNovoAdministrador(req, res));
app.put('/administradores/:id_adm', (req, res) => administradorController.atualizarAdministrador(req, res));
app.delete('/administradores/:id_admn', (req, res) => administradorController.excluirAdministrador(req, res));

app.listen(3000, () => {
    'Servidor funcionando na porta 3000';
});