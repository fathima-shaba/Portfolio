// Typing animation
const roles = [
  "Full Stack Developer",
  "Web Designer",
  "Frontend Developer"
];

let index = 0;
const typing = document.getElementById("typing") || document.getElementById("typing-text");

if (typing) {
  typing.textContent = roles[0];
  setInterval(() => {
    index = (index + 1) % roles.length;
    typing.textContent = roles[index];
  }, 2200);
}

// Particle network effect
const canvas = document.getElementById('particleCanvas');
let ctx = null;
let particles = [];
let mouse = { x: null, y: null, radius: 150 };

if (canvas && canvas.getContext) {
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 2;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.speedY = (Math.random() - 0.5) * 1.2;
    const bubbleColors = [
      'rgba(43,188,255,0.12)',
      'rgba(64,154,255,0.10)',
      'rgba(43,120,180,0.09)'
    ];
    this.color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    this.baseSize = this.size;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    this.x = Math.max(0, Math.min(canvas.width, this.x));
    this.y = Math.max(0, Math.min(canvas.height, this.y));

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 0.06;
        this.x += dx * force;
        this.y += dy * force;
        this.size = Math.min(this.baseSize * 2.2, this.size + 0.05);
      } else {
        this.size += (this.baseSize - this.size) * 0.02;
      }
    }
  }

  draw() {
    const grad = ctx.createRadialGradient(
      this.x - this.size * 0.4,
      this.y - this.size * 0.6,
      this.size * 0.1,
      this.x,
      this.y,
      this.size
    );
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.2, 'rgba(255,255,255,0.6)');
    grad.addColorStop(1, this.color);

    ctx.save();
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.stroke();
    ctx.restore();
  }
}

function init() {
  particles = [];
  if (!ctx) return;
  const count = Math.min(140, Math.floor((canvas.width * canvas.height) / 12000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    ));
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 140) {
        ctx.strokeStyle = `rgba(43,188,255,${Math.max(0, 0.14 - distance / 700)})`;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }

    if (mouse.x !== null && mouse.y !== null) {
      const dx = particles[i].x - mouse.x;
      const dy = particles[i].y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        ctx.strokeStyle = `rgba(43,188,255,${Math.max(0, 0.22 - distance / (mouse.radius * 2.2))})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

window.addEventListener('resize', () => {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }
});

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${targetId}`);
    }
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

function handleScroll() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', handleScroll);

init();
animate();
