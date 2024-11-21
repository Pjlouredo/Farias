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

// Controle do modal de vídeo
const videoModal = document.getElementById("videoModal");
const linkVideo = document.getElementById("sobre-nos-link");
const closeVideoModal = document.querySelector("#videoModal .close");

// Abrir o modal de vídeo
linkVideo.onclick = function (e) {
  e.preventDefault();
  videoModal.style.display = "block";
  playVideo();
};

// Fechar o modal de vídeo
closeVideoModal.onclick = function () {
  videoModal.style.display = "none";
  pauseVideo();
};

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target === videoModal) {
    videoModal.style.display = "none";
    pauseVideo();
  }
};

// Funções para controlar o vídeo
function playVideo() {
  const video = videoModal.querySelector("video");
  if (video) video.play();
}

function pauseVideo() {
  const video = videoModal.querySelector("video");
  if (video) video.pause();
}

// Controle do modal de descrição dos produtos
const productModal = document.getElementById("productModal");
const modalDescription = document.getElementById("modal-description");
const closeProductModal = document.querySelector("#productModal .close");

// Abrir o modal com descrição de produto
document.querySelectorAll(".info-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.getAttribute("data-info");
    modalDescription.innerHTML = description;
    productModal.style.display = "block";
  });
});

// Fechar o modal de produtos
closeProductModal.addEventListener("click", () => {
  productModal.style.display = "none";
});

// Fechar modal de produtos ao clicar fora
window.addEventListener("click", (event) => {
  if (event.target === productModal) {
    productModal.style.display = "none";
  }
});
