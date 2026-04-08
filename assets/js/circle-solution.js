document.addEventListener('DOMContentLoaded', () => {
  /* ----------------------------------------------------
     1. TAB / ORBIT INTERACTION
     ---------------------------------------------------- */
  const orbitItems = document.querySelectorAll(".orbit-item");
  const cards = document.querySelectorAll(".solution-card");

  function activate(id) {
    // 1. Remove active class from all
    orbitItems.forEach(i => i.classList.remove("active"));
    cards.forEach(c => c.classList.remove("active"));

    // 2. Add active class to matching ID
    // We use quotes for selector in case ID is a number string
    const targetOrbit = document.querySelector(`.orbit-item[data-id="${id}"]`);
    const targetCard = document.querySelector(`.solution-card[data-id="${id}"]`);

    if (targetOrbit) targetOrbit.classList.add("active");
    if (targetCard) targetCard.classList.add("active");
  }

  // Bind Clicks
  orbitItems.forEach(item => {
    item.addEventListener("click", () => activate(item.dataset.id));
  });

  cards.forEach(card => {
    card.addEventListener("click", () => activate(card.dataset.id));
  });

  /* ----------------------------------------------------
     2. PARTICLE SYSTEM (CANVAS)
     ---------------------------------------------------- */
  const canvas = document.getElementById("particleCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    // Particle Config
    const particleCount = 60;
    const connectionDistance = 150;
    const mouseDistance = 200;

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    // Init
    window.addEventListener("resize", resize);
    resize();
    initParticles();
    animate();
  }
});
