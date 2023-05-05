const inputFilme = document.getElementById('filme');
const buttonAdicionar = document.getElementById('adicionar');
const listaFilmes = document.getElementById('lista-filmes');

buttonAdicionar.addEventListener('click', adicionarFilme);

function adicionarFilme() {
    //Criar um novo item da lista
    const novoFilme = document.createElement('li');
    novoFilme.innerText = inputFilme.value;

    //Adicionar o novo item de lista à lista de tarefas
    listaFilmes.appendChild(novoFilme);

    //Limpar o campo de entrada de texto
    inputFilme.value = '';
}