// Importando o Express
const express = require('express');
const Controller = require('./app/controllers/itemController');
const controller = new Controller();
const app = express();


// Definir que as requisições serão trabalhadas em json
app.use(express.json());

// Endpoint inicial
app.get('/', function(req, res) {
    res.send('Bem vindo à aula de Programação Web!');
});

app.get('/itens', (req, res) => controller.findAll(req, res));
app.get('/itens/:id', (req, res) => controller.findById(req, res));
app.post('/itens', (req, res) => controller.create(req, res));
app.put('/itens/:id', (req, res) => controller.update(req, res));
app.delete('/itens/:id', (req, res) => controller.delete(req, res));

// Endpoint de saída: lista de lista
// app.get('/list', function(req, res) {
//     lists = {
//         "lists": [
//             {
//                 "name": "Tarefas",
//                 "color": "#030303"
//             },
//             {
//                 "name": "Compras",
//                 "color": "#020202"
//             }
//         ]
//     };

//     return res.json(lists);
// });

// Endpoint de entrada: recebe os dados de uma nova lista
// app.post('/list', function(req, res) {
//     // Dados de entrada
//     const name = req.body.name;
//     const color = req.body.color;

//     // Dados de saída
//     return res.json({
//         inputs: {
//             name: name,
//             color: color
//         }
//     });
// });


// Starta o WebServer
app.listen(3306, function() {
    console.log('Servidor rodando na porta 3306!');
});