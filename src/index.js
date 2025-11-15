// src/index.js
import 'lite-youtube-embed/src/lite-yt-embed.js';

// tu código para el header:
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});