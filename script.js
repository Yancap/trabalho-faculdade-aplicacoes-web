

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("toggle-theme");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Alternar tema claro/escuro
  if (themeButton) {
      themeButton.addEventListener("click", () => {
          document.body.classList.toggle("dark-theme");
          themeButton.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
      });
  }

  // Menu hambúrguer
  if (hamburger) {
      hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
      });
  }

  // Validação do formulário (só existe em contato.html)
  const form = document.getElementById("contact-form");
  if (form) {
      form.addEventListener("submit", (e) => {
          e.preventDefault();

          const nome = document.getElementById("nome").value.trim();
          const email = document.getElementById("email").value.trim();
          const mensagem = document.getElementById("mensagem").value.trim();

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!nome || !email || !mensagem) {
              alert("Por favor, preencha todos os campos!");
              return;
          }

          if (!emailRegex.test(email)) {
              alert("Por favor, insira um e-mail válido!");
              return;
          }

          alert("Mensagem enviada com sucesso!");
          form.reset();
      });
  }
});

