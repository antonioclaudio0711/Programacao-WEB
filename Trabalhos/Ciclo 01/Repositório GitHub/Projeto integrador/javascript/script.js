let usuariosCadastrados = [];

function cadastrarNovoUsuario() {
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;

    let novoCadastro = {
        nome: nome,
        email: email,
        cpf: cpf,
    };

    usuariosCadastrados.push(novoCadastro);

    console.log(usuariosCadastrados);

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("cpf").value = ''; 

    listarUsuarios();
}

function listarUsuarios() {
    let usuariosCadastradosDiv = document.getElementById("usuarios-cadastrados");
    usuariosCadastradosDiv.innerHTML = '';

    usuariosCadastrados.forEach(function (usuarioCadastrado) {
        let usuarioCadastradoDiv = document.createElement("div");
        usuarioCadastradoDiv.innerHTML = `Nome do usuário: ${usuarioCadastrado.nome} ---> CPF: ${usuarioCadastrado.cpf}`
        usuariosCadastradosDiv.appendChild(usuarioCadastradoDiv);
    })
}