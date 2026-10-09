/**
 * ============================================================================
 * ✨ WARM SCRAPBOOK FAIRYLINES & FLOATING ROSE PETALS CANVAS ENGINE
 * ============================================================================
 * High-performance HTML5 Canvas rendering tailored for the Scrapbook Journal:
 * - Floating golden fireflies and warm fairy-light embers drifting over paper
 * - Realistic swaying and falling soft rose flower petals
 * - Interactive cursor glow attracting nearby fireflies with warm threads
 * - Eco-friendly auto-pausing when tab is hidden
 * ============================================================================
 */

class StardustUniverse {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.fireflies = [];
    this.petals = [];
    this.mouse = { x: -1000, y: -1000, radius: 120, isHovering: false };
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    this.config = {
      fireflyCount: 75,
      petalCount: 20,
      threadDistance: 95,
      colors: [
        '#ECC880', // Vintage warm gold
        '#F08A78', // Soft coral peach
        '#B7605F', // Terracotta
        '#E5B299', // Rose gold
        '#899481', // Sage leaf green
        '#FFB2A6'  // Blush pink
      ]
    };

    this.init();
  }

  init() {
    this.handleResize();
    this.createFireflies();
    this.createPetals();
    this.bindEvents();
    this.animate();
  }

  handleResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createFireflies() {
    this.fireflies = [];
    this.lastScrollY = window.scrollY || 0;
    const count = Math.min(this.config.fireflyCount, Math.floor((this.width * this.height) / 9000));
    
    for (let i = 0; i < count; i++) {
      const depth = Math.random() < 0.5 ? 1 : (Math.random() < 0.85 ? 2 : 3);
      this.fireflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        depth: depth,
        radius: depth === 1 ? (Math.random() * 1.0 + 0.8) : (depth === 2 ? (Math.random() * 1.6 + 1.2) : (Math.random() * 2.4 + 1.6)),
        baseAlpha: depth === 1 ? (Math.random() * 0.35 + 0.2) : (depth === 2 ? (Math.random() * 0.55 + 0.35) : (Math.random() * 0.75 + 0.45)),
        pulseSpeed: (Math.random() * 0.02 + 0.008) * (depth === 3 ? 1.2 : 1),
        pulsePhase: Math.random() * Math.PI * 2,
        color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
        vx: (Math.random() - 0.5) * 0.25 * depth,
        vy: (Math.random() - 0.5) * 0.25 * depth
      });
    }
  }

  createPetals() {
    this.petals = [];
    const count = Math.min(this.config.petalCount, Math.floor(this.width / 60));
    
    for (let i = 0; i < count; i++) {
      this.petals.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.5 + 0.25,
        speedX: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.012,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.014 + 0.005,
        alpha: Math.random() * 0.4 + 0.2,
        color: Math.random() > 0.4 ? '#F08A78' : '#B7605F'
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.handleResize();
      this.createFireflies();
    });

    const updateMouse = (x, y) => {
      this.mouse.x = x;
      this.mouse.y = y;
      this.mouse.isHovering = true;
    };

    window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.isHovering = false;
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
      if (!this.isPaused && !this.animating) {
        this.animate();
      }
    });
  }

  drawFireflies() {
    const currentScrollY = window.scrollY || 0;
    const scrollDelta = (currentScrollY - (this.lastScrollY || currentScrollY));
    this.lastScrollY = currentScrollY;

    for (let f of this.fireflies) {
      f.x += f.vx;
      f.y += f.vy - (scrollDelta * 0.02 * f.depth);

      if (f.x < -10) f.x = this.width + 10;
      if (f.x > this.width + 10) f.x = -10;
      if (f.y < -10) f.y = this.height + 10;
      if (f.y > this.height + 10) f.y = -10;

      f.pulsePhase += f.pulseSpeed;
      const currentAlpha = f.baseAlpha * (0.6 + 0.4 * Math.sin(f.pulsePhase));

      // Firefly Soft Warm Glow
      this.ctx.beginPath();
      this.ctx.arc(f.x, f.y, f.radius * 2.8, 0, Math.PI * 2);
      this.ctx.fillStyle = f.color;
      this.ctx.globalAlpha = currentAlpha * 0.25;
      this.ctx.fill();

      // Firefly Core
      this.ctx.beginPath();
      this.ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = f.color;
      this.ctx.globalAlpha = currentAlpha;
      this.ctx.fill();
    }
  }

  drawThreads() {
    if (!this.mouse.isHovering) return;

    for (let i = 0; i < this.fireflies.length; i++) {
      const f1 = this.fireflies[i];
      const dx = this.mouse.x - f1.x;
      const dy = this.mouse.y - f1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius) {
        const lineAlpha = (1 - dist / this.mouse.radius) * 0.35;
        this.ctx.beginPath();
        this.ctx.moveTo(f1.x, f1.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.strokeStyle = `rgba(183, 96, 95, ${lineAlpha})`;
        this.ctx.lineWidth = 0.8;
        this.ctx.stroke();

        for (let j = i + 1; j < this.fireflies.length; j++) {
          const f2 = this.fireflies[j];
          const d2x = f1.x - f2.x;
          const d2y = f1.y - f2.y;
          const dist2 = Math.sqrt(d2x * d2x + d2y * d2y);

          if (dist2 < this.config.threadDistance) {
            const threadAlpha = (1 - dist2 / this.config.threadDistance) * 0.2;
            this.ctx.beginPath();
            this.ctx.moveTo(f1.x, f1.y);
            this.ctx.lineTo(f2.x, f2.y);
            this.ctx.strokeStyle = `rgba(236, 200, 128, ${threadAlpha})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      }
    }
  }

  drawPetals() {
    for (let petal of this.petals) {
      petal.y += petal.speedY;
      petal.swayPhase += petal.swaySpeed;
      petal.x += Math.sin(petal.swayPhase) * 0.6 + petal.speedX;
      petal.rotation += petal.rotationSpeed;

      if (petal.y > this.height + 25) {
        petal.y = -25;
        petal.x = Math.random() * this.width;
      }
      if (petal.x > this.width + 25) petal.x = -25;
      if (petal.x < -25) petal.x = this.width + 25;

      this.ctx.save();
      this.ctx.translate(petal.x, petal.y);
      this.ctx.rotate(petal.rotation);
      this.ctx.globalAlpha = petal.alpha;

      // Realistic soft organic petal curve
      this.ctx.beginPath();
      this.ctx.moveTo(0, -petal.size);
      this.ctx.bezierCurveTo(
        petal.size * 0.75, -petal.size * 0.6,
        petal.size * 0.85, petal.size * 0.7,
        0, petal.size
      );
      this.ctx.bezierCurveTo(
        -petal.size * 0.85, petal.size * 0.7,
        -petal.size * 0.75, -petal.size * 0.6,
        0, -petal.size
      );

      this.ctx.fillStyle = petal.color;
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  animate() {
    if (this.isPaused) {
      this.animating = false;
      return;
    }
    this.animating = true;

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawFireflies();
    this.drawThreads();
    this.drawPetals();
    this.ctx.globalAlpha = 1.0;

    requestAnimationFrame(() => this.animate());
  }
}

// Attach globally
window.StardustUniverse = StardustUniverse;
