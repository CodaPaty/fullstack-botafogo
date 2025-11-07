function toggleInput(field) {
  const inputs = document.querySelectorAll(".input-area");
  inputs.forEach((input) => {
    if (!input.id.includes(field)) {
      input.style.display = "none";
    }
  });

  const el = document.getElementById("input-" + field);
  if (!el) return;

  const isVisible = el.style.display == "block";

  document.querySelectorAll(".input-area").forEach((input) => {
    input.style.display = "none";
  });

  if (!isVisible) {
    el.style.display = "block";
  }
}

document.querySelectorAll(".comment-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".forum-card");
    const box = card.querySelector(".forum-comment-box");
    box.classList.toggle("open");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Função para calcular a altura das barras fixas e ajustar o layout
  function adjustLayoutForMobile() {
    // Verifica se estamos em modo telefone (mesmo breakpoint do CSS)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const navSuperior = document.querySelector(".superior");
    const sidebarLeft = document.querySelector(".sidebar-left");
    const mainContainer = document.querySelector(".container");

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
      mainContainer.style.paddingTop = "";
      sidebarLeft.style.top = "";
    }
  }

  // Executa no carregamento inicial da página
  adjustLayoutForMobile();

  // Executa sempre que a janela for redimensionada (para lidar com rotação de tela)
  window.addEventListener("resize", adjustLayoutForMobile);
});

// Lógica para Modais de Login e Cadastro
const btnEntrar = document.querySelector(".btn-Entrar");
const btnCadastrar = document.querySelector(".btn-Cadastrar");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const loginCloseBtn = document.getElementById("login-close");
const registerCloseBtn = document.getElementById("register-close");
const loginSubmitBtn = document.getElementById("login-submit");
const registerSubmitBtn = document.getElementById("register-submit");

function openModal(modalElement) {
  if (modalElement) modalElement.classList.add("open");
}

function closeModal(modalElement) {
  if (modalElement) modalElement.classList.remove("open");
}

// Abrir Modais ao clicar nos botões da navbar
if (btnEntrar && loginModal) {
  btnEntrar.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(loginModal);
  });
}

if (btnCadastrar && registerModal) {
  btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(registerModal);
  });
}

// Fechar Modais ao clicar no botão "Cancelar"
if (loginCloseBtn) {
  loginCloseBtn.addEventListener("click", () => {
    closeModal(loginModal);
  });
}

if (registerCloseBtn) {
  registerCloseBtn.addEventListener("click", () => {
    closeModal(registerModal);
  });
}

// Fechar Modais ao clicar no overlay (fora do conteúdo)
if (loginModal) {
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      closeModal(loginModal);
    }
  });
}

if (registerModal) {
  registerModal.addEventListener("click", (e) => {
    if (e.target === registerModal) {
      closeModal(registerModal);
    }
  });
}

// Lógica de Submissão (exemplo)
if (loginSubmitBtn) {
  loginSubmitBtn.addEventListener("click", () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
      alert(
        `Login efetuado para: ${username}. (A lógica de autenticação real iria aqui)`
      );
      closeModal(loginModal);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}

if (registerSubmitBtn) {
  registerSubmitBtn.addEventListener("click", () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById(
      "register-confirm-password"
    ).value;

    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }
      alert(
        `Cadastro efetuado para: ${email}. (A lógica de registro real iria aqui)`
      );
      closeModal(registerModal);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}
