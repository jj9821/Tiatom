/**
 * ============================================================================
 * 📸 47-ITEM SCRAPBOOK POLAROID GALLERY & ALBUM LIGHTBOX (Kevin & Kunju)
 * ============================================================================
 * Features:
 * - 47 authentic photos from Pala school days (Carmel & Chavara), road trips, and memories
 * - Organic tilted Polaroid frames with washi tape ribbons (rose, sage, gold, peach)
 * - Handwritten titles (Caveat) and captions (Playpen Sans)
 * - Category filter tabs & vintage scrapbook album lightbox
 * ============================================================================
 */

class MediaGalleryEngine {
  constructor() {
    this.mediaItems = (typeof window !== 'undefined' && window.MEDIA_ITEMS && window.MEDIA_ITEMS.length)
      ? window.MEDIA_ITEMS
      : (typeof MEDIA_ITEMS !== 'undefined' ? MEDIA_ITEMS : []);
    this.currentFilter = 'all';
    this.currentIndex = 0;
    
    this.gridContainer = document.getElementById('media-gallery-grid');
    this.filterContainer = document.getElementById('gallery-filter-chips');
    this.lightbox = document.getElementById('cinema-lightbox');
    this.activeVideos = new Map();
    this.videoObserver = null;
    this.celebrationTriggered = false;

    this.init();
  }

  init() {
    this.renderFilterChips();
    this.setupIntersectionObserver();
    this.renderGallery();
    this.initLightboxEvents();
    this.initScrollMilestones();
  }

  renderFilterChips() {
    if (!this.filterContainer) return;

    const filters = [
      { id: 'all', label: `All ${this.mediaItems.length} Memories ✨`, count: this.mediaItems.length },
      { id: 'school-days', label: '8th Grade Spark 🎒', count: this.mediaItems.filter(m => m.tag === 'school-days').length },
      { id: 'best-buds', label: 'Best Buds & Banter ☕', count: this.mediaItems.filter(m => m.tag === 'best-buds').length },
      { id: 'adventures', label: 'Adventures & Drives 🚗', count: this.mediaItems.filter(m => m.tag === 'adventures').length },
      { id: 'unfiltered', label: 'Candid & Unfiltered 🍕', count: this.mediaItems.filter(m => m.tag === 'unfiltered').length },
      { id: 'favorites', label: 'Forever Keepsakes 👑', count: this.mediaItems.filter(m => m.tag === 'favorites').length }
    ];

    this.filterContainer.innerHTML = filters.map(f => `
      <button 
        data-filter="${f.id}"
        class="filter-chip px-4 py-1.5 rounded-full text-xs font-handwritten text-base tracking-wide transition-all duration-300 flex items-center gap-2 ${
          this.currentFilter === f.id 
            ? 'bg-[#B7605F] text-white shadow-md shadow-[#B7605F]/30 scale-105 border border-[#8B3F3E]' 
            : 'bg-white text-[#635356] hover:text-[#B7605F] hover:bg-[#F7EFE5] border border-[#D9C5B2] shadow-sm'
        }">
        <span>${f.label}</span>
        <span class="text-[11px] px-1.5 py-0.2 rounded-full ${this.currentFilter === f.id ? 'bg-black/20 text-white' : 'bg-[#FCF8F2] text-[#899481] border border-[#D9C5B2]'}">${f.count}</span>
      </button>
    `).join('');

    this.filterContainer.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.dataset.filter;
        this.setFilter(filter);
      });
    });
  }

  getTagEmoji(tag) {
    const map = {
      'school-days': '🎒',
      'best-buds': '☕',
      'adventures': '🚗',
      'unfiltered': '🍕',
      'favorites': '👑'
    };
    return map[tag] || '📸';
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.renderFilterChips();
    this.renderGallery();

    if (window.audioEngine) {
      window.audioEngine.playChime();
    }
  }

  getFilteredItems() {
    if (this.currentFilter === 'all') return this.mediaItems;
    return this.mediaItems.filter(m => m.tag === this.currentFilter);
  }

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    this.videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      });
    }, {
      rootMargin: '50px 0px 50px 0px',
      threshold: 0.35
    });
  }

  renderGallery() {
    if (!this.gridContainer) return;

    const items = this.getFilteredItems();

    if (items.length === 0) {
      this.gridContainer.innerHTML = `
        <div class="col-span-full py-20 text-center text-[#B7605F] font-handwritten text-3xl">
          No polaroid entries found in this journal chapter.
        </div>
      `;
      return;
    }

    // Organic rotations and washi tape patterns
    const rotations = [-2.0, 1.8, -1.2, 2.4, -2.8, 1.4, -1.9, 2.2];
    const tapeTypes = ['rose', 'gold', 'sage', 'peach', 'gingham'];
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    this.gridContainer.innerHTML = items.map((item, index) => {
      let aspectClass = 'aspect-[3/4]';
      if (item.aspectRatio === 'portrait') aspectClass = 'aspect-[3/4] sm:aspect-[4/5]';
      if (item.aspectRatio === 'landscape') aspectClass = 'aspect-[16/10] sm:aspect-[16/11]';
      if (item.aspectRatio === 'square') aspectClass = 'aspect-square';

      const isVideo = item.type === 'video';
      const baseRot = rotations[index % rotations.length];
      const rot = isMobile ? (baseRot * 0.45).toFixed(1) : baseRot;
      const tapeClass = tapeTypes[index % tapeTypes.length];
      const tagEmoji = this.getTagEmoji(item.tag);
      const displayEmojis = item.emojis || item.title || '✨';

      return `
        <div 
          class="media-card polaroid-card break-inside-avoid w-full max-w-[96%] mx-auto sm:max-w-none mb-6 sm:mb-8 group cursor-pointer"
          data-id="${item.id}"
          data-index="${index}"
          style="transform: rotate(${rot}deg);"
          tabindex="0"
          role="button"
          aria-label="View memory #${item.id}: ${displayEmojis}. Press Enter to expand.">
          
          <!-- Washi Tape Ribbon Strip -->
          <div class="washi-tape ${tapeClass}"></div>

          <!-- Top Interactive Ribbon Action Tabs -->
          <div class="absolute top-2 left-2 right-2 flex items-center justify-between z-20 pointer-events-auto gap-2">
            <button 
              type="button"
              class="card-song-btn w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm bg-[#FCF8F2]/90 hover:bg-[#B7605F] hover:text-white flex items-center justify-center border border-[#D9C5B2] shadow-sm transition-all hover:scale-110 active:scale-95 touch-target-44"
              data-card-id="${item.id}"
              aria-label="Play song"
              title="Song 🎵">
              <span>🎵</span>
            </button>
            
            <button 
              type="button"
              class="card-voice-btn w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm bg-[#FCF8F2]/90 hover:bg-[#899481] hover:text-white flex items-center justify-center border border-[#D9C5B2] shadow-sm transition-all hover:scale-110 active:scale-95 touch-target-44"
              data-card-id="${item.id}"
              aria-label="Hear voice note"
              title="Voice 🎙️">
              <span>🎙️</span>
            </button>
          </div>

          <!-- Media Container with Polaroid Photo Border -->
          <div class="relative w-full ${aspectClass} overflow-hidden rounded bg-[#F7EFE5] border border-[#E8DACB]">
            ${isVideo ? `
              <video 
                class="media-thumb inline-video w-full h-full object-cover"
                src="${item.src}"
                poster="${item.poster || ''}"
                muted
                loop
                playsinline
                webkit-playsinline="true"
                x5-playsinline="true"
                preload="none">
              </video>
              <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white font-mono text-[9px] flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse"></span>
                <span>REEL</span>
              </div>
            ` : `
              <img 
                src="${item.src}" 
                alt="${displayEmojis}"
                loading="lazy"
                decoding="async"
                class="media-thumb w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onerror="if(!this.dataset.retry){this.dataset.retry='1';if(this.src.includes('assets/photos/tia/')){this.src=this.src.replace('assets/photos/tia/','tia/');}else{this.src='tia/'+this.getAttribute('src').split('/').pop();}}"
              />
            `}

            <!-- Hover Quick View Icon -->
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div class="w-10 h-10 rounded-full bg-white/90 text-[#684045] flex items-center justify-center shadow-lg">
                <i data-lucide="maximize-2" class="w-4 h-4"></i>
              </div>
            </div>
          </div>

          <!-- Handwritten Polaroid Bottom Margin -->
          <div class="pt-2.5 pb-1 px-1 flex flex-col items-center justify-center text-center gap-1">
            <div class="w-full flex items-center justify-between text-[11px] font-note text-[#899481] px-1">
              <span class="text-sm" title="${item.tag}">${tagEmoji}</span>
              <span class="font-mono text-[10px] text-[#9B878A]">#${item.id}</span>
            </div>

            <div class="text-2xl sm:text-3xl py-0.5 tracking-wider select-none transform transition-transform group-hover:scale-110">
              ${displayEmojis}
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    // Observe videos for viewport auto-play
    if (this.videoObserver) {
      this.gridContainer.querySelectorAll('video.inline-video').forEach(vid => {
        this.videoObserver.observe(vid);
      });
    }

    // Attach card action listeners for Tap for Song & Voice Note
    this.gridContainer.querySelectorAll('.card-song-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.cardId;
        if (window.audioEngine) {
          window.audioEngine.playCardSong(id);
        }
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 500);
      });
    });

    this.gridContainer.querySelectorAll('.card-voice-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.cardId;
        if (window.audioEngine) {
          window.audioEngine.playVoiceNote(id);
        }
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 500);
      });
    });

    // Attach card click & keyboard handlers to open Lightbox
    this.gridContainer.querySelectorAll('.media-card').forEach(card => {
      const openCard = (e) => {
        if (e.target.closest('.card-song-btn') || e.target.closest('.card-voice-btn')) return;
        const id = parseInt(card.dataset.id, 10);
        const itemIdx = this.mediaItems.findIndex(m => m.id === id);
        if (itemIdx !== -1) {
          this.openCinemaLightbox(itemIdx);
        }
      };

      card.addEventListener('click', openCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCard(e);
        }
      });
    });
  }

  initLightboxEvents() {
    if (!this.lightbox) return;

    const closeBtn = document.getElementById('cinema-close-btn');
    const prevBtn = document.getElementById('cinema-prev-btn');
    const nextBtn = document.getElementById('cinema-next-btn');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeCinemaLightbox());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevItem());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextItem());

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox || e.target.classList.contains('lightbox-backdrop')) {
        this.closeCinemaLightbox();
      }
    });

    // Touch Swipe Gestures for Mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    this.lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    this.lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < -45) {
          this.nextItem();
        } else if (diffX > 45) {
          this.prevItem();
        }
      } else {
        if (diffY > 80) {
          this.closeCinemaLightbox();
        }
      }
    };

    window.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('is-open')) return;

      if (e.key === 'Escape') this.closeCinemaLightbox();
      if (e.key === 'ArrowLeft') this.prevItem();
      if (e.key === 'ArrowRight') this.nextItem();
      if (e.key === ' ') {
        const vid = document.getElementById('cinema-video-player');
        if (vid && !vid.classList.contains('hidden')) {
          e.preventDefault();
          if (vid.paused) vid.play(); else vid.pause();
        }
      }
    });
  }

  openCinemaLightbox(index) {
    this.currentIndex = index;
    const item = this.mediaItems[this.currentIndex];
    if (!item || !this.lightbox) return;

    const imgEl = document.getElementById('cinema-image-player');
    const vidEl = document.getElementById('cinema-video-player');
    const titleEl = document.getElementById('cinema-title');
    const tagEl = document.getElementById('cinema-tag');
    const captionEl = document.getElementById('cinema-caption');
    const counterEl = document.getElementById('cinema-counter');

    if (item.type === 'video') {
      if (imgEl) imgEl.classList.add('hidden');
      if (vidEl) {
        vidEl.classList.remove('hidden');
        vidEl.src = item.src;
        vidEl.poster = item.poster || '';
        vidEl.currentTime = 0;
        vidEl.play().catch(() => {});
      }
    } else {
      if (vidEl) {
        vidEl.pause();
        vidEl.classList.add('hidden');
      }
      if (imgEl) {
        imgEl.classList.remove('hidden');
        imgEl.src = item.src;
        imgEl.onerror = function() {
          if (!this.dataset.retry) {
            this.dataset.retry = '1';
            if (this.src.includes('assets/photos/tia/')) this.src = this.src.replace('assets/photos/tia/', 'tia/');
            else this.src = 'tia/' + this.getAttribute('src').split('/').pop();
          }
        };
      }
    }

    if (titleEl) titleEl.textContent = item.emojis || item.title;
    if (tagEl) tagEl.textContent = `${this.getTagEmoji(item.tag)} ${item.tag.replace('-', ' ').toUpperCase()}`;
    if (captionEl) captionEl.textContent = item.caption || item.emojis;
    if (counterEl) counterEl.textContent = `${this.currentIndex + 1} / ${this.mediaItems.length}`;

    this.lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    if (window.audioEngine) {
      window.audioEngine.playChime();
    }
  }

  closeCinemaLightbox() {
    if (!this.lightbox) return;
    const vidEl = document.getElementById('cinema-video-player');
    if (vidEl) {
      vidEl.pause();
      vidEl.src = '';
    }
    this.lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  prevItem() {
    const newIdx = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
    this.openCinemaLightbox(newIdx);
  }

  nextItem() {
    const newIdx = (this.currentIndex + 1) % this.mediaItems.length;
    this.openCinemaLightbox(newIdx);
  }

  initScrollMilestones() {
    const triggerEl = document.getElementById('gallery-completion-trigger');
    if (!triggerEl || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.celebrationTriggered) {
          this.celebrationTriggered = true;
          this.triggerGalleryCelebration();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(triggerEl);
  }

  triggerGalleryCelebration() {
    if (window.audioEngine) {
      window.audioEngine.playConfettiFanfare();
    }

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.8 },
        colors: ['#B7605F', '#F08A78', '#ECC880', '#899481', '#FCF8F2']
      });
    }
  }
}

// Attach globally
window.MediaGalleryEngine = MediaGalleryEngine;
window.MemoryTimeline = MediaGalleryEngine;
