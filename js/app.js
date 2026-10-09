/**
 * ============================================================================
 * 🚀 APPLICATION COORDINATOR & INITIALIZATION
 * ============================================================================
 * Coordinates:
 * - Dynamic config injection into DOM (names, titles, subtitles)
 * - Module bootstrapping (Stardust, Audio, Tilt, Timeline, Bento, Letter, Vault)
 * - Navigation links, mobile menu, and smooth scrolling
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.SANCTUARY_CONFIG || {};

  // 1. Populate text & name placeholders from SANCTUARY_CONFIG
  populateConfigText(config);

  // 2. Initialize Stardust Universe Canvas
  const particles = new StardustUniverse('stardust-canvas');
  window.particlesUniverse = particles;

  // 3. Initialize Romantic Audio Engine
  const audio = new RomanticAudioEngine(config.audio);
  window.audioEngine = audio;

  // 4. Initialize 3D Tilt Parallax (Desktop mouse & Mobile gyroscope)
  const tilt = new TiltParallaxEngine({ maxTilt: 11, perspective: 1100, scale: 1.02 });
  tilt.initMobileGyroscope();
  window.tiltEngine = tilt;

  // 5. Initialize Memory Timeline & Lightbox
  const timeline = new MemoryTimeline();
  window.memoryTimeline = timeline;

  // 6. Initialize Bento Grid & Micro-interactions
  const bento = new ReasonsBentoGrid();
  window.reasonsBento = bento;

  // 7. Initialize Love Letter & Grand Finale
  const letter = new RomanticLoveLetter();
  window.loveLetter = letter;

  // 8. Initialize Milestone & Secret Vault
  const milestoneVault = new MilestoneAndVault();
  window.milestoneVault = milestoneVault;

  // 9. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 10. Smooth navigation handlers
  initNavigation();

  // 11. Celestial Scroll Comet Tracker
  initScrollComet();

  // 12. Word-by-Word Headline Spans
  initHeadlineSplits();

  // 13. GSAP Scroll Parallax & Staggered Reveal Engine
  initGSAPMotion();

  // 14. Fallback IntersectionObserver Scroll Reveals
  initScrollReveals();
});

function initScrollComet() {
  const cometContainer = document.getElementById('celestial-scroll-comet');
  const cometHead = document.getElementById('comet-head');
  if (!cometContainer || !cometHead) return;

  const updateComet = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);

    if (scrollY > 120) {
      cometContainer.style.opacity = '1';
      cometHead.style.top = `${progress * 100}%`;
    } else {
      cometContainer.style.opacity = '0';
    }
  };

  window.addEventListener('scroll', updateComet, { passive: true });
  updateComet();
}

function initHeadlineSplits() {
  const headlines = document.querySelectorAll('h2.font-serif-editorial');
  headlines.forEach(heading => {
    // Avoid re-splitting if already processed
    if (heading.dataset.splitDone) return;
    heading.dataset.splitDone = 'true';

    const words = heading.textContent.trim().split(/\s+/);
    heading.innerHTML = words.map(w => `<span class="reveal-word">${w}</span>`).join(' ');
  });

  // Reveal words on scroll or immediately
  const wordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const words = entry.target.querySelectorAll('.reveal-word');
        words.forEach((word, idx) => {
          setTimeout(() => {
            word.classList.add('is-revealed');
          }, idx * 45);
        });
        wordObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  headlines.forEach(h => wordObserver.observe(h));
}

function initGSAPMotion() {
  if (typeof gsap === 'undefined') return;

  // Register ScrollTrigger if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Parallax chapter & hero showcase images against scroll
    document.querySelectorAll('.tilt-card img').forEach(img => {
      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.tilt-card') || img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    });

    // 2. Parallax ambient atmospheric glowing orbs
    document.querySelectorAll('.ambient-orb').forEach((orb, i) => {
      const speed = (i + 1) * 35;
      gsap.to(orb, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2
        }
      });
    });
  }
}

function populateConfigText(config) {
  if (!config) return;

  // Nav name
  const navName = document.getElementById('nav-recipient-name');
  if (navName && config.recipientName) {
    navName.textContent = config.recipientName;
  }

  // Hero badge
  const heroBadge = document.getElementById('hero-badge-text');
  if (heroBadge && config.hero?.badge) {
    heroBadge.textContent = config.hero.badge;
  }

  // Hero title prefix
  const heroPrefix = document.getElementById('hero-title-prefix');
  if (heroPrefix && config.hero?.titlePrefix) {
    heroPrefix.textContent = config.hero.titlePrefix;
  }

  // Hero title highlight
  const heroHighlight = document.getElementById('hero-title-highlight');
  if (heroHighlight && config.hero?.titleHighlight) {
    heroHighlight.textContent = config.hero.titleHighlight;
  }

  // Hero subtitle
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle && config.hero?.subtitle) {
    heroSubtitle.textContent = config.hero.subtitle;
  }

  // Letter greeting
  const letterGreeting = document.getElementById('letter-greeting-text');
  if (letterGreeting && config.recipientName) {
    letterGreeting.textContent = `To My Beloved ${config.recipientName},`;
  }
}

function initNavigation() {
  // Mobile nav toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileMenu = document.getElementById('mobile-nav-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden')) {
        if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.classList.add('hidden');
        }
      }
    });
  }

  // Scroll to section helper
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initScrollReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });
}
