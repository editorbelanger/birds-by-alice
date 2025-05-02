const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
  overlay.classList.toggle('show')
  menuToggle.classList.toggle("white")
});

overlay.addEventListener('click', () => {
  navbar.classList.remove('show');
  overlay.classList.remove('show');
  menuToggle.classList.remove("white")
});
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const images = document.querySelectorAll('.image-container img');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.getAttribute('data-description') || '';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });