const filmes = require('./src/data/filmes.json')
const express = require('express');
const server = express();
server.use(express.json());

server.get('/', function(req, res) {
    return res.json({
        mensagem: 'Bem vindo à API do aluno Antônio Claudio Ferreira Filho.'
    });
});

server.get('/filmes', function(req, res) {
    return res.json(filmes);
});

server.listen(3000, function() {
    console.log('Servidor rodando na porta 3000!');
});

server.post('/filmes', function(req, res) {
    const id = req.body.id;
    const movie_name = req.body.movie_name;
    const principal_character = req.body.principal_character;

    return res.json({
        inputs: {
            id: id,
            movie_name: movie_name,
            principal_character: principal_character
        }
    });
});