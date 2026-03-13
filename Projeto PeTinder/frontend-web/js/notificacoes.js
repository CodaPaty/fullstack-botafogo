/* Lógica para abrir/fechar o menu de notificações */
document.addEventListener('DOMContentLoaded', () => {
    const notifBtn = document.getElementById('notifBtn');
    const notifDropdown = document.getElementById('notifDropdown');

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Alterna entre mostrar e esconder
            const isVisible = notifDropdown.style.display === 'block';
            notifDropdown.style.display = isVisible ? 'none' : 'block';
        });

        // Fecha o menu se clicar em qualquer outro lugar da página
        document.addEventListener('click', (e) => {
            if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
                notifDropdown.style.display = 'none';
            }
        });
    }
});