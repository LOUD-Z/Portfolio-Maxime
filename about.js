// Animation du stylet : tourne légèrement toutes les 5 secondes
const stylus = document.querySelector('.stylus');
let angle = 0;

setInterval(() => {
  angle += 15; // tourner de 15 degrés
  stylus.style.transform = `rotate(${angle}deg)`;
}, 5000);
