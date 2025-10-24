function toggleInput(field) {
    const inputs = document.querySelectorAll('.input-area');
    inputs.forEach(input => {
        if (!input.id.includes(field)) {
            input.style.display = 'none';
        }
    });

    const el = document.getElementById('input-' + field);
    if (el.style.display === 'block') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
}
document.querySelectorAll(".comment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".forum-card");
        const box = card.querySelector(".forum-comment-box");
        box.classList.toggle("open");
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // Função para calcular a altura das barras fixas e ajustar o layout
    function adjustLayoutForMobile() {
        // Verifica se estamos em modo telefone (mesmo breakpoint do CSS)
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        const navSuperior = document.querySelector('.superior');
        const sidebarLeft = document.querySelector('.sidebar-left');
        const mainContainer = document.querySelector('.container');

        if (isMobile && navSuperior && sidebarLeft && mainContainer) {
            
            // 1. Calcula a altura REAL da navbar principal (dinâmica)
            const navSuperiorHeight = navSuperior.offsetHeight;
            
            // 2. A altura da sidebar-left é fixa no CSS (45px)
            const sidebarLeftHeight = sidebarLeft.offsetHeight || 45; 

            // 3. POSICIONA A SIDEBAR-LEFT (a navbar secundária) EXATAMENTE
            // O topo da sidebar-left é igual à altura total da nav superior.
            sidebarLeft.style.top = `${navSuperiorHeight}px`;
            
            // 4. Garante que o conteúdo principal comece abaixo das duas barras fixas.
            const totalFixedHeight = navSuperiorHeight + sidebarLeftHeight;
            mainContainer.style.paddingTop = `${totalFixedHeight}px`;

        } else if (mainContainer && sidebarLeft) {
            // Limpa os estilos quando não está em modo móvel
            mainContainer.style.paddingTop = ''; 
            sidebarLeft.style.top = '';
        }
    }

    // Executa no carregamento inicial da página
    adjustLayoutForMobile();
    
    // Executa sempre que a janela for redimensionada (para lidar com rotação de tela)
    window.addEventListener('resize', adjustLayoutForMobile);
});