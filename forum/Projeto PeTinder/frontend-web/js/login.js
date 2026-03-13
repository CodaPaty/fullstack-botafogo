document.getElementById('loginBtn').addEventListener('click', function(event) {
    // Impede o formulário de recarregar a página (comportamento padrão)
    event.preventDefault();
    
    // Aqui você poderia validar o e-mail e senha
    // Por enquanto, vamos apenas simular o login e redirecionar
    
    console.log("Fazendo login...");
    
    // Redireciona para a home (ajuste o caminho se a sua home estiver em outra pasta)
    window.location.href = "home.html"; 
});