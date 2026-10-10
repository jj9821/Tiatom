/**
 * ============================================================================
 * 💌 INTERACTIVE LOVE LETTER & GRAND FINALE CLIMAX
 * ============================================================================
 * Features:
 * - 3D Wax Seal envelope unsealing animation
 * - Typewriter love letter with adjustable speed and realistic pacing
 * - Grand Finale "Open My Heart" screen bloom & canvas confetti explosion
 * - Declaration modal with heartfelt quote and celestial celebration
 * ============================================================================
 */

class RomanticLoveLetter {
  constructor() {
    this.config = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.letter : {};
    this.finaleConfig = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.finale : {};
    
    this.isUnsealed = false;
    this.isTyping = false;
    this.isFinished = false;
    this.typeSpeed = this.config.typingSpeed || 22;
    this.typeTimeout = null;

    this.initElements();
  }

  initElements() {
    this.sealBtn = document.getElementById('wax-seal-btn');
    this.envelopeCover = document.getElementById('letter-envelope-cover');
    this.letterPaper = document.getElementById('letter-paper-content');
    this.typewriterTarget = document.getElementById('letter-typewriter-body');
    this.replayBtn = document.getElementById('letter-replay-btn');
    this.finaleBtn = document.getElementById('open-my-heart-btn');
    this.finaleModal = document.getElementById('finale-modal');
    this.finaleCloseBtn = document.getElementById('finale-modal-close');
    this.celestialFlash = document.getElementById('celestial-flash-overlay');

    if (this.sealBtn) {
      this.sealBtn.addEventListener('click', () => this.unsealLetter());
      this.sealBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.unsealLetter();
        }
      });
    }

    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => this.restartTypewriter());
    }

    if (this.letterPaper) {
      this.letterPaper.addEventListener('click', (e) => {
        if (e.target.closest('#open-my-heart-btn') || e.target.closest('#letter-replay-btn')) return;
        if (this.isTyping) {
          this.finishTypewriterInstantly();
        }
      });
    }

    if (this.finaleBtn) {
      this.finaleBtn.addEventListener('click', () => this.triggerGrandFinale());
    }

    const closeFinale = () => {
      if (this.finaleModal) {
        this.finaleModal.classList.remove('is-open');
        this.finaleModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (this.finaleBtn) this.finaleBtn.focus();
      }
    };

    if (this.finaleCloseBtn) {
      this.finaleCloseBtn.addEventListener('click', closeFinale);
    }

    if (this.finaleModal) {
      this.finaleModal.addEventListener('click', (e) => {
        if (e.target === this.finaleModal || e.target.classList.contains('lightbox-backdrop')) {
          closeFinale();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (this.finaleModal && this.finaleModal.classList.contains('is-open') && e.key === 'Escape') {
        closeFinale();
      }
    });
  }

  unsealLetter() {
    if (this.isUnsealed) return;
    this.isUnsealed = true;

    if (window.audioEngine) {
      window.audioEngine.playSealBreak();
    }

    // 1. Trigger realistic wax fracture burst animation
    if (this.sealBtn) {
      this.sealBtn.classList.add('is-cracking');
    }

    // 2. Launch spectacular firecrackers blasting & balloons popping across the entire screen!
    this.launchCrackersAnimation();
    this.launchBalloonsAnimation();

    setTimeout(() => {
      if (this.envelopeCover) {
        this.envelopeCover.style.transition = 'all 0.85s var(--ease-smooth)';
        this.envelopeCover.style.transform = 'translateY(-100%) scaleY(0)';
        this.envelopeCover.style.opacity = '0';
        this.envelopeCover.style.pointerEvents = 'none';
      }

      if (this.letterPaper) {
        this.letterPaper.classList.remove('hidden');
        this.letterPaper.style.opacity = '0';
        this.letterPaper.style.transform = 'translateY(24px)';
        
        setTimeout(() => {
          this.letterPaper.style.transition = 'all 0.85s var(--ease-smooth)';
          this.letterPaper.style.opacity = '1';
          this.letterPaper.style.transform = 'translateY(0)';
          this.startTypewriter();
        }, 100);
      }
    }, 450);
  }

  startTypewriter() {
    if (!this.typewriterTarget || this.isTyping) return;
    this.isTyping = true;
    this.isFinished = false;

    if (this.replayBtn) this.replayBtn.classList.add('hidden');

    const paragraphs = this.config.paragraphs || [];
    const greeting = this.config.greeting || "To My Dearest Kunju,";
    const signOff = this.config.signOff || "Always by your side,";
    const signature = this.config.signatureName || "Kevin ❤️";

    // Build the full narrative text with warm stationery ink styling
    this.typewriterTarget.innerHTML = `
      <div class="font-handwritten text-3xl text-[#684045] font-bold mb-4 tracking-wide">${greeting}</div>
      <div id="typewriter-body-stream" class="space-y-4 font-note text-base md:text-lg text-[#2B2225] leading-relaxed"></div>
      <div id="typewriter-signoff" class="mt-8 pt-4 opacity-0 transition-opacity duration-700">
        <div class="font-handwritten text-2xl text-[#899481] italic">${signOff}</div>
        <div class="font-cursive text-3xl md:text-4xl text-[#B7605F] mt-1">${signature}</div>
      </div>
    `;

    const bodyStream = document.getElementById('typewriter-body-stream');
    const signoffEl = document.getElementById('typewriter-signoff');

    let currentParaIdx = 0;
    let currentCharIdx = 0;

    // Create container for first paragraph
    let currentParaEl = document.createElement('p');
    bodyStream.appendChild(currentParaEl);

    // Typing Cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    currentParaEl.appendChild(cursor);

    const typeNextChar = () => {
      if (currentParaIdx >= paragraphs.length) {
        // Typing finished
        this.isTyping = false;
        this.isFinished = true;
        if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
        if (signoffEl) signoffEl.style.opacity = '1';
        if (this.replayBtn) this.replayBtn.classList.remove('hidden');
        return;
      }

      const currentText = paragraphs[currentParaIdx];

      if (currentCharIdx < currentText.length) {
        const char = currentText.charAt(currentCharIdx);
        // Insert character before cursor
        currentParaEl.insertBefore(document.createTextNode(char), cursor);
        currentCharIdx++;

        // Calculate dynamic pause for natural punctuation cadence
        let delay = this.typeSpeed;
        if (char === '.' || char === '!' || char === '?') {
          delay = this.typeSpeed * 8;
        } else if (char === ',' || char === '—' || char === ';') {
          delay = this.typeSpeed * 4;
        }

        this.typeTimeout = setTimeout(typeNextChar, delay);
      } else {
        // Move to next paragraph
        currentParaIdx++;
        currentCharIdx = 0;

        if (currentParaIdx < paragraphs.length) {
          currentParaEl = document.createElement('p');
          bodyStream.appendChild(currentParaEl);
          currentParaEl.appendChild(cursor);
          this.typeTimeout = setTimeout(typeNextChar, this.typeSpeed * 10);
        } else {
          this.typeTimeout = setTimeout(typeNextChar, 200);
        }
      }
    };

    typeNextChar();
  }

  restartTypewriter() {
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
    this.isTyping = false;
    this.startTypewriter();
  }

  finishTypewriterInstantly() {
    if (!this.isTyping) return;
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
    this.isTyping = false;
    this.isFinished = true;

    const paragraphs = this.config.paragraphs || [];
    const bodyStream = document.getElementById('typewriter-body-stream');
    const signoffEl = document.getElementById('typewriter-signoff');

    if (bodyStream) {
      bodyStream.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    if (signoffEl) signoffEl.style.opacity = '1';
    if (this.replayBtn) this.replayBtn.classList.remove('hidden');
  }

  /* --------------------------------------------------------------------------
     Grand Finale: Celestial Confetti & Heart Bloom Explosion
     -------------------------------------------------------------------------- */
  triggerGrandFinale() {
    // 1. Play synthesized fanfare
    if (window.audioEngine) {
      window.audioEngine.playConfettiFanfare();
    }

    // 2. Trigger soft celestial screen bloom
    if (this.celestialFlash) {
      this.celestialFlash.classList.add('active');
      setTimeout(() => {
        this.celestialFlash.classList.remove('active');
      }, 700);
    }

    // 3. Canvas Confetti Explosions (if canvas-confetti is loaded)
    if (typeof confetti === 'function') {
      const colors = this.finaleConfig.confettiColors || ['#F4D0D2', '#E8A598', '#FCEADE', '#FF6B8B', '#E5B299'];

      // Stage 1: Massive center heart blast
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2,
        disableForReducedMotion: false
      });

      // Stage 2: Left and right side fireworks canons
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 75,
          origin: { x: 0, y: 0.7 },
          colors: colors
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 75,
          origin: { x: 1, y: 0.7 },
          colors: colors
        });
      }, 250);

      // Stage 3: Cascading golden star shower
      setTimeout(() => {
        confetti({
          particleCount: 90,
          spread: 160,
          origin: { y: 0.3 },
          colors: ['#FCEADE', '#FFD700', '#F4D0D2'],
          gravity: 0.6,
          scalar: 1.4,
          drift: 0.1
        });
      }, 550);
    }

    // 4. Open Grand Finale Modal
    setTimeout(() => {
      if (this.finaleModal) {
        this.finaleModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }, 600);
  }

  /* --------------------------------------------------------------------------
     🎆 Firecrackers Blasting Across the Screen
     -------------------------------------------------------------------------- */
  launchCrackersAnimation() {
    // 1. Screen flash effect
    const flashEl = document.createElement('div');
    flashEl.className = 'cracker-flash-overlay is-flashing';
    document.body.appendChild(flashEl);
    setTimeout(() => {
      flashEl.classList.remove('is-flashing');
      setTimeout(() => flashEl.remove(), 400);
    }, 280);

    if (typeof confetti !== 'function') return;

    const crackerColors = ['#B7605F', '#ECC880', '#F08A78', '#FFB2A6', '#684045', '#E63946', '#FFE5B4', '#FFFDF9'];

    // Stage 1: Big immediate center blast right behind the letter seal
    confetti({
      particleCount: 110,
      spread: 120,
      origin: { x: 0.5, y: 0.65 },
      startVelocity: 45,
      colors: crackerColors,
      scalar: 1.2
    });

    // Stage 2: Left corner rocket barrage
    setTimeout(() => {
      confetti({
        particleCount: 75,
        angle: 60,
        spread: 80,
        origin: { x: 0.02, y: 0.95 },
        startVelocity: 58,
        colors: crackerColors
      });
    }, 200);

    // Stage 3: Right corner rocket barrage
    setTimeout(() => {
      confetti({
        particleCount: 75,
        angle: 120,
        spread: 80,
        origin: { x: 0.98, y: 0.95 },
        startVelocity: 58,
        colors: crackerColors
      });
    }, 380);

    // Stage 4: Multi-shot sky firecracker bursts across the screen
    const burstTimers = [600, 950, 1350, 1750, 2200, 2700, 3200];
    burstTimers.forEach(delay => {
      setTimeout(() => {
        const randX = 0.15 + Math.random() * 0.7;
        const randY = 0.15 + Math.random() * 0.35;
        confetti({
          particleCount: 50 + Math.floor(Math.random() * 30),
          spread: 360,
          origin: { x: randX, y: randY },
          startVelocity: 28 + Math.random() * 12,
          colors: crackerColors,
          gravity: 0.85,
          scalar: 1.15,
          ticks: 160
        });
      }, delay);
    });

    // Stage 5: Falling golden stars shower
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 140,
        origin: { x: 0.5, y: 0.15 },
        colors: ['#ECC880', '#FDE68A', '#FFB2A6', '#FFFDF9'],
        gravity: 0.55,
        scalar: 1.3,
        drift: 0.05
      });
    }, 1200);
  }

  /* --------------------------------------------------------------------------
     🎈 Celebratory Balloons Floating & Popping Up Across the Entire Screen
     -------------------------------------------------------------------------- */
  launchBalloonsAnimation() {
    // Container overlay
    const overlay = document.createElement('div');
    overlay.className = 'celebration-balloons-overlay';
    document.body.appendChild(overlay);

    const balloonGradients = [
      'linear-gradient(135deg, #E07A5F 0%, #B7605F 100%)',  // Terracotta
      'linear-gradient(135deg, #FFB2A6 0%, #F08A78 100%)',  // Warm Peach
      'linear-gradient(135deg, #FDE68A 0%, #ECC880 100%)',  // Golden Amber
      'linear-gradient(135deg, #8E545A 0%, #684045 100%)',  // Vintage Maroon
      'linear-gradient(135deg, #CBD5C0 0%, #899481 100%)',  // Sage Green
      'linear-gradient(135deg, #FDA4AF 0%, #E11D48 100%)',  // Rose Gold
      'linear-gradient(135deg, #DDD6FE 0%, #A78BFA 100%)',  // Soft Lavender
      'linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)'   // Honey Champagne
    ];

    const celebratoryEmojis = ['🎈', '🎂', '❤️', '✨', '🎉', '🌸', '💫', '🍰', '💖', '🥂', '🥳', '🧁'];
    const totalBalloons = 30;

    for (let i = 0; i < totalBalloons; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'celebratory-balloon';

      const gradient = balloonGradients[i % balloonGradients.length];
      const emoji = celebratoryEmojis[i % celebratoryEmojis.length];

      // Randomized layout & physics across entire screen width
      const leftPercent = Math.floor(2 + (i * (94 / totalBalloons)) + (Math.random() * 5 - 2.5));
      const size = 50 + Math.floor(Math.random() * 20); // 50px - 70px
      const duration = (4.4 + Math.random() * 2.2).toFixed(1); // 4.4s - 6.6s
      const delay = (0.05 + Math.random() * 2.2).toFixed(2); // Staggered 0 - 2.2s
      const sway1 = Math.floor(14 + Math.random() * 18);
      const sway2 = -Math.floor(14 + Math.random() * 18);
      const rot = Math.floor(4 + Math.random() * 8);

      balloon.style.background = gradient;
      balloon.style.left = `${Math.min(96, Math.max(2, leftPercent))}%`;
      balloon.style.setProperty('--b-size', `${size}px`);
      balloon.style.setProperty('--float-duration', `${duration}s`);
      balloon.style.setProperty('--float-delay', `${delay}s`);
      balloon.style.setProperty('--sway-1', `${sway1}px`);
      balloon.style.setProperty('--sway-2', `${sway2}px`);
      balloon.style.setProperty('--rot-1', `${rot}deg`);
      balloon.style.setProperty('--rot-2', `${-rot}deg`);

      balloon.innerHTML = `
        <div class="balloon-string"></div>
        <span class="balloon-emoji">${emoji}</span>
      `;

      // Interactive tap to pop!
      balloon.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        this.popBalloon(balloon);
      });

      overlay.appendChild(balloon);

      // Clean up after floating off screen
      balloon.addEventListener('animationend', () => {
        balloon.remove();
      });

      // Auto-pop ~8-10 random balloons midway in the sky for the popping spectacle!
      if (i % 3 === 0) {
        const popDelay = parseFloat(delay) * 1000 + 1500 + Math.random() * 1800;
        setTimeout(() => {
          if (balloon.parentNode && !balloon.isPopped) {
            this.popBalloon(balloon);
          }
        }, popDelay);
      }
    }

    // Clean up container after all balloons finish floating
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.remove();
      }
    }, 9500);
  }

  popBalloon(balloon) {
    if (!balloon || balloon.isPopped) return;
    balloon.isPopped = true;
    balloon.classList.add('is-popping');

    if (window.audioEngine) {
      window.audioEngine.playBalloonPop();
    }

    // Confetti burst from balloon center
    const rect = balloon.getBoundingClientRect();
    if (rect.width > 0 && typeof confetti === 'function') {
      const x = Math.max(0, Math.min(1, (rect.left + rect.width / 2) / window.innerWidth));
      const y = Math.max(0, Math.min(1, (rect.top + rect.height / 2) / window.innerHeight));
      confetti({
        particleCount: 18,
        spread: 60,
        origin: { x, y },
        startVelocity: 16,
        ticks: 80,
        colors: ['#B7605F', '#ECC880', '#F08A78', '#FFB2A6', '#FFFDF9']
      });
    }

    setTimeout(() => {
      balloon.remove();
    }, 220);
  }
}

// Attach globally
window.RomanticLoveLetter = RomanticLoveLetter;
