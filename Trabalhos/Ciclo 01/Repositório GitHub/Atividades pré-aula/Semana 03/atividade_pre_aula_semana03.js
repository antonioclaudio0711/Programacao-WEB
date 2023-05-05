/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Antônio Claudio Ferreira Filho 
DATA: 27/03/2023
*/


//Aplicação do método de ordenação BubbleSort
function bubbleSort() {
    var array = [90, 103, 978, 10, 2, 1, 0, 34, 78];
    var tamanho = array.length;

    for (var i = 0; i <= tamanho; i ++) {
        for (var j = 0; j <= tamanho - 1; j++) {
            if(array[j] > array[j + 1]) {
                var temporaria = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporaria;
            }
        }
    }

    var bubble_sort_answer = document.getElementById('bubble_sort');
    var paragraph = document.createElement('p');
    paragraph.textContent = `Ordenação BubbleSort: ${array}`;

    bubble_sort_answer.appendChild(paragraph);
}

//Aplicação do método de fatorial
function fatorial() {
    var base_calculo = 5;
    var resultado = 1;

    if(base_calculo < 0) {
        resultado = -1;
    } else if (base_calculo == 0) {
        resultado = 1;
    } else {
       for(var i = base_calculo; i > 0; i--) {
        resultado = resultado * i;
       }
    }

    var fatorial_answer = document.getElementById('fatorial');
    var paragraph = document.createElement('p');
    paragraph.textContent = `Fatorial de 05 = ${resultado.toString()}`;

    fatorial_answer.appendChild(paragraph);
}

//Aplicação do método de Fibonacci
function fibonacci() {
    var base_calculo = 5;
    var elemento_anterior = 0;
    var elemento_posterior = 1;
    var resultado = [0, 1];
    var temporaria;

    while (elemento_posterior <= base_calculo) {
        temporaria = elemento_posterior;
        elemento_posterior = elemento_anterior + elemento_posterior;
        elemento_anterior = temporaria;
        resultado.push(elemento_posterior);
    }

    var fibonacci_answer = document.getElementById('fibonacci');
    var paragraph = document.createElement('p');
    paragraph.textContent = `Fibonacci (05) = ${resultado}`;

    fibonacci_answer.appendChild(paragraph);
}

//Aplicação do método para verificação se um número é primo
function verificarNumeroPrimo() {
    var base_calculo = 10;
    var resultado = 0;
    var contagem = 0;

    for (var i = 1; i <= base_calculo; i++) {
        var divisao_exata = base_calculo % i;
        if (divisao_exata == 0) {
            contagem++;
        }
    }

    if (contagem == 2) {
        resultado = true;
    } else {
        resultado = false;
    }

    var primo_answer = document.getElementById('numero_primo');
    var paragraph = document.createElement('p');
    paragraph.textContent = `O número ${base_calculo} é primo? ${resultado.toString()}`;

    primo_answer.appendChild(paragraph);
}

//Aplicação do método para inverter uma String
function inverterString() {
    var string = 'Antônio Claudio'
    var array = string.split('');
    var arrayInvertido = array.reverse();
    var stringInvertida = arrayInvertido.join('');

    var inverter_string_answer = document.getElementById('inverter_string');
    var paragraph = document.createElement('p');
    paragraph.textContent = `O inverso da String ${string} é ${stringInvertida}`;

    inverter_string_answer.appendChild(paragraph);
}

//Aplicação do método para contar o número d epalavras de uma String
function contarPalavrasString() {
    var string = 'Antônio Claudio Ferreira Filho';
    var arrayContagem = string.split(' ');
    var contagem = arrayContagem.length;

    var contar_palavras_string_answer = document.getElementById('contar_palavras_string');
    var paragraph = document.createElement('p');
    paragraph.textContent = `A String ${string} possui ${contagem} palavras`;

    contar_palavras_string_answer.appendChild(paragraph);
}

//Aplicação do método para calcular a média aritmética
function media() {
    var array = [30, 40, 70, 60]
    var soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }

    var media = soma / array.length;

    var media_answer = document.getElementById('media');
    var paragraph = document.createElement('p');
    paragraph.textContent = `A media do array ${array} é igual a: ${media}`;

    media_answer.appendChild(paragraph);
}

//Aplicação do método para encontrar a palavra mais longa em uma String
function palavraMaisLongaString() {
    var string = 'A vida é uma loucura';
    var palavras = string.split(' ');
    var maiorPalavra = '';

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > maiorPalavra.length) {
            maiorPalavra = palavras[i];
        }
    }

    var maior_palavra_string_answer = document.getElementById('palavra_mais_longa');
    var paragraph = document.createElement('p');
    paragraph.textContent = `A maior palavra da String "${string}" é: ${maiorPalavra}`;
    maior_palavra_string_answer.appendChild(paragraph);

}

//Aplicação do método para somar os números de uma matriz
function soma() {
    var array = [30, 40, 70, 60]
    var soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }

    var soma_answer = document.getElementById('soma');

    var paragraph = document.createElement('p');
    paragraph.textContent = `A soma dos números do array ${array} é igual a: ${soma}`;

    soma_answer.appendChild(paragraph);
}