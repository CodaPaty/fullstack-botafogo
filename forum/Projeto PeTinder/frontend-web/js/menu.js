document.addEventListener('DOMContentLoaded', () => {
  const btnOpen = document.getElementById('openSidebar');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (!btnOpen || !sidebar) {
    console.error('Botão ou sidebar não encontrados');
    return;
  }

  btnOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
    overlay?.classList.toggle('active');
  });

  // Impede que clique dentro da sidebar feche o menu
  sidebar.addEventListener('click', (e) => e.stopPropagation());

  // Fecha ao clicar na overlay
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Fecha ao clicar fora (document) — protege o botão para não fechar imediatamente
  document.addEventListener('click', (e) => {
    if (!sidebar.classList.contains('active')) return;
    if (!sidebar.contains(e.target) && !btnOpen.contains(e.target)) {
      sidebar.classList.remove('active');
      overlay?.classList.remove('active');
    }
  });

  // Esc para fechar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sidebar.classList.remove('active');
      overlay?.classList.remove('active');
    }
  });
});