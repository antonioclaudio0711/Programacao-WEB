// Array para armazenar os dados dos pacientes
let pacientes = [];

// Array para armazenar os dados de consultas
let consultas = [];

// Array para armazenar os dados de medicamentos
let medicamentos = [];

// Função para adicionar um paciente ao array
function adicionarPaciente() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let dataNascimento = document.getElementById("data-nascimento").value;
    let endereco = document.getElementById("endereco").value;
    let telefone = document.getElementById("telefone").value;

    let paciente = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        endereco: endereco,
        telefone: telefone,
    };

    pacientes.push(paciente);

    document.getElementById('nome').value = '';
    document.getElementById('data-nascimento').value = 'dd/mm/aaaa';
    document.getElementById('cpf').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('pais').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('convenio-medico').value = '';
    document.getElementById('numero-convenio').value = '';
    document.getElementById('plano-saude').value = '';
}

// Função para adicionar uma consulta no array
function adicionarConsulta() {
    let data = document.getElementById("data").value;
    let horario = document.getElementById("horario").value;
    let nome = document.getElementById("nome").value;
    let medico = document.getElementById("medico").value;
    let tipoConsulta = document.getElementById("tipo-consulta").value;

    let consulta = {
        data: data,
        horario: horario,
        nome: nome,
        medico: medico,
        tipoConsulta: tipoConsulta,
    };

    consultas.push(consulta);

    document.getElementById('data').value = '';
    document.getElementById('horario').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('medico').value = '';
    document.getElementById('tipo-consulta').value = '';
}

//Função para buscar pacientes por CPF ou nome
function buscarPaciente() {
    let nome = document.getElementById("nome-consulta").value;
    let cpf = document.getElementById("cpf-consulta").value;

    let pacienteEncontrado = pacientes.filter(function (paciente) {
        return paciente.nome === nome || paciente.cpf === cpf;
    })

    let resultados = document.getElementById("resultados");
    resultados.innerHTML = '';

    if (pacienteEncontrado.length === 0) {
        resultados.innerHTML = "Nenhum paciente encontrado!";
    } else {
        pacienteEncontrado.forEach(function (paciente) {
            let resultado = document.createElement("div");
            resultado.innerHTML = `Nome: ${paciente.nome} - ${paciente.cpf}`;
            resultados.appendChild(resultado);
        });
    }

    document.getElementById("nome-consulta").value = '';
    document.getElementById("cpf-consulta").value = '';
}

//Função para listar as consultas cadastradas
function listarConsultas() {
    let consultasDiv = document.getElementById("consultas");
    consultasDiv.innerHTML = '';
    consultas.forEach(function (consulta) {
        let consultaDiv = document.createElement("div");
        consultaDiv.innerHTML = `Consulta ${consulta.data} ---> Paciente: ${consulta.nome} com Dr(a) ${consulta.medico} (${consulta.tipo_consulta})`;
        consultasDiv.appendChild(consultaDiv);
    });
}

//Função para listar os medicamentos cadastrados
function adicionarMedicamento() {
    let nomeMedicamento = document.getElementById("nome-medicamento").value;
    let dataVencimento = document.getElementById("data-vencimento").value;

    let medicamento = {
        nomeMedicamento: nomeMedicamento,
        dataVencimento: dataVencimento,
    }

    medicamentos.push(medicamento);

    document.getElementById("nome-medicamento").value = '';
    document.getElementById("data-vencimento").value = '';

    let medicamentosDiv = document.getElementById("medicamentos");
    medicamentosDiv.innerHTML = '';
    medicamentos.forEach(function (medicamento) {
        let medicamentoDiv = document.createElement("div");
        medicamentoDiv.innerHTML = `Nome do medicamento: ${medicamento.nomeMedicamento} ---> vence em ${medicamento.dataVencimento}`;
        medicamentosDiv.appendChild(medicamentoDiv);
    });
}