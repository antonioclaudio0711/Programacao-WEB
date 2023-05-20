const express = require('express');

const AtorController = require('./app/controller/ator_controller');
const atorController = new AtorController();

const FilmeController = require('./app/controller/filme_controller');
const filmeController = new FilmeController();

const server = express();
server.use(express.json());

server.get('/', function(req, res) {
    return res.json({
        mensagem: 'Bem vindo à API do aluno Antônio Claudio Ferreira Filho.'
    });
});

server.get('/atores', (req, res) => atorController.findAll(req, res));
server.get('/atores/:id_ator', (req, res) => atorController.findById(req, res));
server.post('/atores', (req, res) => atorController.create(req, res));
server.put('/atores/:id_ator', (req, res) => atorController.update(req, res));
server.delete('/atores/:id_ator', (req, res) => atorController.delete(req, res));

server.get('/filmes', (req, res) => filmeController.findAll(req, res));
server.get('/filmes/:id_filme', (req, res) => filmeController.findById(req, res));
server.post('/filmes', (req, res) => filmeController.create(req, res));
server.put('/filmes/:id_filme', (req, res) => filmeController.update(req, res));
server.delete('/filmes/:id_filme', (req, res) => filmeController.delete(req, res));

server.listen(3306, function() {
    console.log('Servidor rodando na porta 3306!');
});

// Atividade prática referente à semana 10
// server.get('/filmes', function(req, res) {
//     return res.json(filmes);
// });

// server.post('/filmes', function(req, res) {
//     const id = req.body.id;
//     const movie_name = req.body.movie_name;
//     const principal_character = req.body.principal_character;

//     return res.json({
//         inputs: {
//             id: id,
//             movie_name: movie_name,
//             principal_character: principal_character
//         }
//     });
// });

