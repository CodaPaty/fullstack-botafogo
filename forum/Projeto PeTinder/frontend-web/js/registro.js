// Seleciona o formulário de registro
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar

        // Aqui capturamos os valores (opcional, para testes no console)
        const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
        const email = document.querySelector('input[placeholder="E-mail"]').value;

        console.log("Cadastrando usuário:", nome, email);

        // Feedback para o usuário
        alert("Conta criada com sucesso, " + nome + "! Redirecionando para o login...");

        // Manda o usuário de volta para a tela de login (index.html na raiz)
        window.location.href = "../index.html";
    });
}