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

    // 2. Confetti sparkle burst
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#B7605F', '#ECC880', '#684045', '#F08A78', '#FFF8DC']
      });
    }

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
}

// Attach globally
window.RomanticLoveLetter = RomanticLoveLetter;
