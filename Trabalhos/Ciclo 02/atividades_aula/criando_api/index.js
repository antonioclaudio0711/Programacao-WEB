// Importando o Express
const express = require('express');
const app = express();

// Definir que as requisições serão trabalhadas em json
app.use(express.json());

// Endpoint inicial
app.get('/', function(req, res) {
    res.send('Bem vindo à aula de Programação Web!');
});

// Endpoint de saída: lista de lista
app.get('/list', function(req, res) {
    lists = {
        "lists": [
            {
                "name": "Tarefas",
                "color": "#030303"
            },
            {
                "name": "Compras",
                "color": "#020202"
            }
        ]
    };

    return res.json(lists);
});

// Endpoint de entrada: recebe os dados de uma nova lista
app.post('/list', function(req, res) {
    // Dados de entrada
    const name = req.body.name;
    const color = req.body.color;

    // Dados de saída
    return res.json({
        inputs: {
            name: name,
            color: color
        }
    });
});


// Starta o WebServer
app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000!');
});