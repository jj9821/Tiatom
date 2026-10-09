/**
 * ============================================================================
 * 🌌 "REASONS WHY YOU MEAN THE WORLD" BENTO GRID & STICKY NOTES
 * ============================================================================
 * Features:
 * - Interactive Scrapbook Bento Grid with 3D Flip & Kraft Paper Note Reveals
 * - Floating Heart Bursts at exact cursor/tap location
 * - Handwritten Affirmations & Tea-Stained Whispers Generator
 * ============================================================================
 */

class ReasonsBentoGrid {
  constructor() {
    this.reasons = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.reasons : [];
    this.whispers = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.whispers : [];
    this.container = document.getElementById('bento-grid');
    this.whisperTextEl = document.getElementById('whisper-quote-text');
    this.whisperBtn = document.getElementById('whisper-next-btn');

    this.init();
  }

  init() {
    this.renderBentoCards();
    this.initWhisperGenerator();
    this.initGlobalHeartBursts();
  }

  renderBentoCards() {
    if (!this.container) return;

    this.container.innerHTML = this.reasons.map((item, index) => {
      const tapeStyles = ['rose', 'gold', 'sage', 'peach'];
      const tapeClass = tapeStyles[index % tapeStyles.length];

      if (item.interactiveType === 'flip') {
        return `
          <div 
            class="${item.gridSpan} bento-flip-card group" 
            data-id="${item.id}"
            tabindex="0"
            role="button"
            aria-label="Flip note: ${item.title}. Press Enter or Space to reveal note."
            aria-expanded="false">
            <div class="bento-flip-inner">
              <!-- Card Front: Pinned Kraft / Stationery Note -->
              <div class="bento-card-front p-6 flex flex-col justify-between overflow-hidden relative bg-white border border-[#D9C5B2] shadow-sm rounded-2xl">
                <!-- Top washi tape accent -->
                <div class="washi-tape ${tapeClass} !w-16 !h-4 !top-[-8px]"></div>

                <div>
                  <div class="flex items-center justify-between mb-3 mt-1">
                    <span class="px-3 py-1 rounded-full text-xs font-handwritten text-sm bg-[#FCF8F2] text-[#B7605F] border border-[#D9C5B2]">
                      ${item.badge}
                    </span>
                    <div class="w-8 h-8 rounded-full bg-[#F7EFE5] border border-[#D9C5B2] flex items-center justify-center text-[#B7605F] group-hover:scale-110 transition-transform">
                      <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                    </div>
                  </div>

                  <span class="text-xs uppercase tracking-wider text-[#899481] font-mono">${item.category}</span>
                  <h3 class="font-handwritten text-2xl text-[#684045] font-bold mt-1 mb-2 leading-snug">
                    ${item.title}
                  </h3>
                  <p class="text-xs sm:text-sm text-[#635356] font-note leading-relaxed">
                    ${item.shortDescription}
                  </p>
                </div>

                <div class="pt-4 mt-auto flex items-center justify-between text-xs text-[#B7605F] font-handwritten text-base">
                  <span class="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Tap to flip & read
                  </span>
                  <i data-lucide="arrow-right" class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>

              <!-- Card Back: Handwritten Journal Entry -->
              <div class="bento-card-back p-6 flex flex-col justify-between overflow-hidden relative bg-[#F7EFE5] border-2 border-dashed border-[#B7605F]/40 shadow-md rounded-2xl">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-note text-[#B7605F] uppercase tracking-wider flex items-center gap-1">
                      <i data-lucide="heart" class="w-3.5 h-3.5 text-[#B7605F] fill-[#B7605F]"></i> From Kevin's Heart
                    </span>
                    <span class="text-[11px] font-handwritten text-sm text-[#899481]">Tap to flip back</span>
                  </div>

                  <h4 class="font-handwritten text-2xl text-[#684045] font-bold mb-2">
                    ${item.title}
                  </h4>

                  <p class="text-xs sm:text-sm text-[#2B2225] font-note leading-relaxed italic border-l-2 border-[#B7605F]/50 pl-3">
                    “${item.revealedContent}”
                  </p>
                </div>

                <div class="pt-3 mt-auto text-right">
                  <span class="font-cursive text-xl text-[#B7605F]">forever yours, Kevin ♡</span>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        // Scratch / Frosted Mist Reveal Card
        return `
          <div 
            class="${item.gridSpan} relative rounded-2xl overflow-hidden bg-white border border-[#D9C5B2] shadow-sm p-6 min-h-[260px] flex flex-col justify-between group cursor-pointer" 
            data-id="${item.id}"
            tabindex="0"
            role="button"
            aria-label="Mist card: ${item.title}. Press Enter or Space to clear mist."
            aria-expanded="false">
            <div class="washi-tape ${tapeClass} !w-16 !h-4 !top-[-8px]"></div>

            <!-- Background Content (Revealed) -->
            <div class="relative z-0 h-full flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3 mt-1">
                  <span class="px-3 py-1 rounded-full text-xs font-handwritten text-sm bg-[#FCF8F2] text-[#B7605F] border border-[#D9C5B2]">
                    ${item.badge}
                  </span>
                  <div class="w-8 h-8 rounded-full bg-[#F7EFE5] border border-[#D9C5B2] flex items-center justify-center text-[#B7605F]">
                    <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                  </div>
                </div>

                <h3 class="font-handwritten text-2xl text-[#684045] font-bold mb-2">
                  ${item.title}
                </h3>
                <p class="text-xs sm:text-sm text-[#2B2225] leading-relaxed italic border-l-2 border-[#B7605F]/50 pl-3 font-note">
                  “${item.revealedContent}”
                </p>
              </div>

              <div class="pt-3 text-xs text-[#899481] font-handwritten text-base flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-[#B7605F]"></i> Secret Keepsake Unveiled
              </div>
            </div>

            <!-- Scratch / Frosted Parchment Overlay -->
            <div class="scratch-overlay p-6 text-center">
              <div class="w-12 h-12 rounded-full bg-[#FCF8F2] border border-[#D9C5B2] flex items-center justify-center text-[#B7605F] mb-3 shadow-sm">
                <i data-lucide="sparkles" class="w-5 h-5"></i>
              </div>
              <h4 class="font-handwritten text-2xl text-[#684045] font-bold mb-1">
                ${item.title}
              </h4>
              <p class="text-xs text-[#635356] font-note max-w-xs mb-3">
                ${item.shortDescription}
              </p>
              <span class="px-4 py-1.5 rounded-full text-xs font-handwritten text-sm bg-white hover:bg-[#B7605F] hover:text-white text-[#B7605F] border border-[#D9C5B2] transition-all shadow-sm">
                ✨ Tap to peel note
              </span>
            </div>
          </div>
        `;
      }
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    // Attach card click & keyboard flip listeners
    this.container.querySelectorAll('.bento-flip-card').forEach(card => {
      const toggleFlip = () => {
        const isFlipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-expanded', isFlipped);
        if (window.audioEngine) window.audioEngine.playChime();
      };

      card.addEventListener('click', toggleFlip);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      });
    });

    // Attach scratch overlay reveal listeners
    this.container.querySelectorAll('.scratch-overlay').forEach(overlay => {
      const revealCard = (e) => {
        e.stopPropagation();
        overlay.classList.add('revealed');
        const parentCard = overlay.closest('[data-id]');
        if (parentCard) parentCard.setAttribute('aria-expanded', 'true');
        if (window.audioEngine) window.audioEngine.playConfettiFanfare();

        if (typeof confetti === 'function') {
          const rect = overlay.getBoundingClientRect();
          confetti({
            particleCount: 25,
            spread: 45,
            origin: {
              x: (rect.left + rect.width / 2) / window.innerWidth,
              y: (rect.top + rect.height / 2) / window.innerHeight
            },
            colors: ['#B7605F', '#F08A78', '#ECC880', '#899481']
          });
        }
      };

      overlay.addEventListener('click', revealCard);
      const parent = overlay.closest('[data-id]');
      if (parent) {
        parent.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            revealCard(e);
          }
        });
      }
    });
  }

  initWhisperGenerator() {
    if (!this.whisperBtn || !this.whisperTextEl || !this.whispers.length) return;

    let currentIdx = 0;

    this.whisperBtn.addEventListener('click', () => {
      this.whisperTextEl.style.opacity = '0';
      this.whisperTextEl.style.transform = 'translateY(8px)';

      setTimeout(() => {
        currentIdx = (currentIdx + 1) % this.whispers.length;
        this.whisperTextEl.textContent = `“${this.whispers[currentIdx]}”`;
        this.whisperTextEl.style.opacity = '1';
        this.whisperTextEl.style.transform = 'translateY(0)';
      }, 200);

      if (window.audioEngine) window.audioEngine.playChime();
    });
  }

  initGlobalHeartBursts() {
    let lastBurstTime = 0;

    const createHeartBurst = (x, y) => {
      const now = Date.now();
      if (now - lastBurstTime < 180) return;
      lastBurstTime = now;

      const heart = document.createElement('div');
      heart.className = 'floating-heart-burst';
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 60;
      const rot = (Math.random() - 0.5) * 50;
      heart.style.setProperty('--dx', `${dx}px`);
      heart.style.setProperty('--rot', `${rot}deg`);

      const emojis = ['♡', '💖', '✨', '🌸', '🎂'];
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.fontSize = `${Math.floor(Math.random() * 8 + 18)}px`;
      heart.style.color = '#B7605F';

      document.body.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) heart.parentNode.removeChild(heart);
      }, 1400);
    };

    window.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) return;
      createHeartBurst(e.clientX, e.clientY);
    });
  }
}

// Attach globally
window.ReasonsBentoGrid = ReasonsBentoGrid;
