// Particles.js
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "color": { "value": "#ffaa00" },
    "line_linked": { "enable": true, "distance": 120, "color": "#ffaa00", "opacity":0.4, "width":1 },
    "move": { "speed": 2 }
  }
});

// Theme change
const setTheme = color => document.body.style.setProperty('--main-color', color);

// Scroll animations
function revealOnScroll() {
  document.querySelectorAll('.card, .skill-bar, .project-card').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', ()=>{
  // Animate skill bars
  document.querySelectorAll('.progress-fill').forEach(bar=>{
    const percent = bar.getAttribute('data-percent');
    setTimeout(()=>{ bar.style.width = percent + '%'; }, 300);
  });
  revealOnScroll();
});

// Project filter
function filterProjects(category){
  document.querySelectorAll('.project-card').forEach(card=>{
    if(category==='all' || card.dataset.category === category){
      card.style.display='block';
    } else {
      card.style.display='none';
    }
  });
}
