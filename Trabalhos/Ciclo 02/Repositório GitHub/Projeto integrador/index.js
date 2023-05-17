const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API do projeto integrador PlaTheia!');
});

app.listen(3000, () => {
    'Servidor funcionando na porta 3000';
});