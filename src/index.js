// src/index.js

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

// Lazy-load del script del vídeo (carga asíncrona)
const video = document.querySelector("lite-youtube");

if (video) {
  const obs = new IntersectionObserver(async ([entry]) => {
    if (entry.isIntersecting) {
      obs.disconnect();
      await import("./video.js"); // carga asíncrona real
    }
  }, { rootMargin: "200px" });

  obs.observe(video);
}
