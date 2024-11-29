document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário
    
    // Coleta os valores do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Simula o envio de um e-mail (não estamos enviando um e-mail real aqui)
    console.log("E-mail enviado com sucesso!");
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    // Exibe a mensagem de sucesso
    document.getElementById("sucesso").style.display = "block";

    // Limpa o formulário após o envio
    document.getElementById("form-contato").reset();

    // Após 3 segundos, esconde a mensagem de sucesso
    setTimeout(function() {
        document.getElementById("sucesso").style.display = "none";
    }, 3000); // 3000 milissegundos = 3 segundos
});
