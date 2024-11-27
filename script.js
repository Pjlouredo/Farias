function toggleMenu() {
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  }

  document.querySelector('.overlay').addEventListener('click', () => {
    toggleMenu();
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    });
  });

  function openModal(title, description) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  const cards = document.querySelectorAll('.product-card');
  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  });
  
  const modal = document.getElementById('videoModal');
const video = document.getElementById('video');
const closeBtn = document.querySelector('.modal .close-btn'); // Seleciona o botão de fechar dentro do modal

// Ao clicar no link "Sobre Nós", abre o modal e começa o vídeo
sobreNosLink.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  video.play();
});

// Quando clicar no botão de fechar, o modal será fechado
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  video.pause();
  video.currentTime = 0;
});

// Quando clicar fora do vídeo, o modal será fechado
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  }
});
