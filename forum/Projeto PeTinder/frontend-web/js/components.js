document.addEventListener('DOMContentLoaded', () => {
    // 1. Defina aqui as suas notificações (você só mudará aqui!)
    const listaNotificacoes = [
        { icone: '🐶', texto: '<strong>Mel</strong> curtiu a foto do seu pet!' },
        { icone: '📅', texto: 'Evento: "Cãominhada" amanhã às 10h.' },
        { icone: '⚠️', texto: 'Vacina de reforço pendente.' },
        { icone: '🐾', texto: 'Novo pet disponível para adoção perto de você!' }
    ];

    const notifDropdown = document.getElementById('notifDropdown');

    if (notifDropdown) {
        // 2. Cria o HTML interno dinamicamente
        let htmlContent = `<div class="notif-header">Notificações</div>`;
        
        listaNotificacoes.forEach(item => {
            htmlContent += `<div class="notif-item">${item.icone} ${item.texto}</div>`;
        });

        htmlContent += `<a href="#" class="notif-footer">Ver todas</a>`;

        // 3. Insere no elemento
        notifDropdown.innerHTML = htmlContent;
    }
});