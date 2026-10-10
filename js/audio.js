/**
 * ============================================================================
 * 🎵 ROMANTIC AUDIO ENGINE (Playing Full Song: 1.mp3)
 * ============================================================================
 * Features:
 * - Plays the full 3+ minute song (assets/audio/1.mp3) continuously
 * - Automatic playback upon site visit & first interaction
 * - Animated real-time equalizer visualizer
 * - Non-destructive card sound effects
 * ============================================================================
 */

class RomanticAudioEngine {
  constructor(config) {
    this.config = config || (window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.audio : {});
    this.isPlaying = false;
    this.volume = this.config.defaultVolume || 0.85;
    this.visInterval = null;

    this.initElements();
  }

  initElements() {
    this.playBtn = document.getElementById('audio-toggle-btn');
    this.eqBars = document.querySelectorAll('.eq-bar');
    this.playerContainer = document.getElementById('audio-player-widget');
    this.trackTitleEl = document.getElementById('audio-track-title');

    // Create dedicated full-length audio element for kunju.mp3
    // Bind to the direct HTML5 audio element
    this.audioEl = document.getElementById('bg-audio-player') || new Audio('assets/audio/kunju.mp3');
    this.audioEl.src = this.config.customAudioUrl || 'assets/audio/kunju.mp3';
    this.audioEl.loop = true;
    this.audioEl.volume = this.volume;
    this.audioEl.preload = 'auto';

    // Sync UI with native audio events
    this.audioEl.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUIPlyingState(true);
    });

    this.audioEl.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateUIPlyingState(false);
    });

    if (!this.audioEl.paused) {
      this.isPlaying = true;
      this.updateUIPlyingState(true);
    }

    if (this.trackTitleEl) {
      this.trackTitleEl.textContent = this.config.trackTitle || "Our Song (kunju.mp3)";
    }

    if (this.playBtn) {
      this.playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayback();
      });
    }

    // Auto-start full song automatically on site visit & interaction
    this.initAutoplay();
  }

  initAutoplay() {
    // One-shot user interaction unlock for strict iOS Safari autoplay policies
    const unlockAudio = () => {
      if (this.audioEl && this.audioEl.paused && this.isPlaying) {
        this.audioEl.play().catch(() => {});
      }
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };

    window.addEventListener('click', unlockAudio, { passive: true, once: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true, once: true });
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    if (!this.audioEl) {
      this.audioEl = document.getElementById('bg-audio-player') || new Audio('assets/audio/tia.mp3');
    }
    this.audioEl.volume = this.volume;

    const playPromise = this.audioEl.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.updateUIPlyingState(true);
      }).catch((err) => {
        console.log("Audio waiting for unlock gesture:", err);
      });
    } else {
      this.updateUIPlyingState(true);
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.updateUIPlyingState(false);
  }

  updateUIPlyingState(playing) {
    if (this.playerContainer) {
      if (playing) {
        this.playerContainer.classList.add('is-playing');
      } else {
        this.playerContainer.classList.remove('is-playing');
      }
    }

    const icon = this.playBtn ? this.playBtn.querySelector('i') : null;
    if (icon) {
      icon.setAttribute('data-lucide', playing ? 'pause' : 'music');
      if (window.lucide) window.lucide.createIcons();
    }

    if (playing) {
      this.startVisualizer();
    } else {
      this.stopVisualizer();
    }
  }

  startVisualizer() {
    if (this.visInterval) clearInterval(this.visInterval);

    this.visInterval = setInterval(() => {
      if (!this.isPlaying) {
        this.stopVisualizer();
        return;
      }

      this.eqBars.forEach((bar, idx) => {
        const base = Math.sin(Date.now() / 150 + idx * 0.8) * 0.5 + 0.5;
        const height = Math.floor(4 + base * 18);
        bar.style.height = `${height}px`;
      });
    }, 80);
  }

  stopVisualizer() {
    if (this.visInterval) {
      clearInterval(this.visInterval);
      this.visInterval = null;
    }
    this.eqBars.forEach(bar => {
      bar.style.height = '4px';
    });
  }

  /* --------------------------------------------------------------------------
     Card Audio Interactions
     -------------------------------------------------------------------------- */
  playCardSong(cardId) {
    // Keep the entire song playing continuously
    if (!this.isPlaying) {
      this.play();
    }

    if (typeof confetti === 'function') {
      confetti({ particleCount: 20, spread: 50, origin: { y: 0.7 } });
    }
  }

  playVoiceNote(cardId) {
    if (!this.isPlaying) {
      this.play();
    }

    // Soft heart burst
    if (typeof confetti === 'function') {
      confetti({ particleCount: 15, spread: 40, origin: { y: 0.6 } });
    }
  }

  switchTrack(trackName) {
    const titleEl = document.getElementById('audio-track-title');
    if (titleEl) {
      titleEl.textContent = trackName;
    }
    this.play();
  }

  playChime() {
    // Non-intrusive UI chime
  }

  playHeartPop() {
    // Non-intrusive UI pop
  }

  playSealBreak() {
    this.playCelebrationSound();
  }

  playCelebrationSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx) this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      // Cheerful celebratory arpeggio chime (C5, E5, G5, C6)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.18, this.audioCtx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(this.audioCtx.currentTime + idx * 0.1);
        osc.stop(this.audioCtx.currentTime + idx * 0.1 + 0.45);
      });
    } catch (e) {}
  }

  playBalloonPop() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx) this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.28, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, this.audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.09);
    } catch (e) {}
  }

  playConfettiFanfare() {
    if (!this.isPlaying) {
      this.play();
    }
    this.playCelebrationSound();
  }
}

if (typeof window !== 'undefined') {
  window.RomanticAudioEngine = RomanticAudioEngine;
}
