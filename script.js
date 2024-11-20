// Navegação suave para âncoras
document.querySelectorAll(".link-menu").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

// Controle do modal
const modal = document.getElementById("videoModal");
const link = document.getElementById("sobre-nos-link");
const close = document.querySelector(".close");

// Abrir o modal ao clicar no link e iniciar reprodução do vídeo
link.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "block";
  playVideo();
};

// Fechar o modal ao clicar no botão "close"
close.onclick = function () {
  modal.style.display = "none";
  pauseVideo();
};

// Fechar o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    pauseVideo();
  }
};

// Função para reproduzir o vídeo
function playVideo() {
  const video = modal.querySelector("video");
  if (video) {
    video.play();
  }
}

// Função para pausar o vídeo
function pauseVideo() {
  const video = modal.querySelector("video");
  if (video) {
    video.pause();
  }
}
