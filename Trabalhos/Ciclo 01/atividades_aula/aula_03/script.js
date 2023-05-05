const inputTarefa = document.getElementById('tarefa');
const buttonAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

buttonAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    //Criar um novo item da lista
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = inputTarefa.value;

    //Adicionar o novo item de lista à lista de tarefas
    listaTarefas.appendChild(novaTarefa);

    //Limpar o campo de entrada de texto
    inputTarefa.value = '';
}