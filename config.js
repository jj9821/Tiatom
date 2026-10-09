/**
 * ============================================================================
 * 💖 DIGITAL SANCTUARY - CONFIGURATION & CONTENT (Kevin & Kunju)
 * ============================================================================
 * Personalized birthday gift & romantic confession website from Kevin to Kunju.
 * Scrapbook & Digital Journal Edition featuring all memories since 8th Standard.
 * ============================================================================
 */

const SANCTUARY_CONFIG = {
  // Couple Information
  recipientName: "Kunju",
  senderName: "Kevin",
  petName: "Kunju",
  
  // Milestone Date (8th Standard Spark Baseline: approx June 1, 2018)
  anniversaryDate: new Date(2018, 5, 1, 0, 0, 0),

  // Hero Section Customization
  hero: {
    badge: "📖 KUNJU'S BIRTHDAY SCRAPBOOK & DIGITAL JOURNAL 🌸",
    titlePrefix: "To My Dearest Kunju,",
    titleHighlight: "Happy Birthday, Kunju! 🎂✨",
    subtitle: "Our 8th grade spark in Pala, Carmel & Chavara school days, late-night cafe banter, and all 47 memories in between. Handcrafted with all my love.",
    scrollHint: "Open Kunju's Journal 📖",
    milestoneLabel: "Adoring You Every Single Second Since 8th Standard"
  },

  // Ambient Audio Settings
  audio: {
    autoplayPrompt: true,
    defaultVolume: 0.75,
    trackTitle: "Our Song (kunju.mp3)",
    customAudioUrl: "assets/audio/kunju.mp3",
  },

  // Polaroid Memories Timeline Gallery Highlights
  memories: [
    {
      id: "mem-1",
      category: "school-days",
      categoryLabel: "The Beginning",
      title: "The 8th Standard Classroom Spark",
      date: "School Days • Pala",
      location: "Carmel & Chavara Hallways",
      image: "assets/photos/tia/tia_19.jpeg",
      caption: "Watching you dance gracefully on stage during our 8th standard school day in Pala lit a quiet spark that never faded.",
      rotation: "-2.5deg",
      tapeColor: "rose"
    },
    {
      id: "mem-2",
      category: "best-buds",
      categoryLabel: "Best Friends",
      title: "Night Banter Outside Blossom",
      date: "Late Evening",
      location: "Church Street / Blossom",
      image: "assets/photos/tia/tia_14.jpeg",
      caption: "Leaning against the table talking for hours. You see me as your closest buddy, but every glance made me fall a little more.",
      rotation: "3deg",
      tapeColor: "gold"
    },
    {
      id: "mem-3",
      category: "favorites",
      categoryLabel: "Radiance",
      title: "Sunshine by the Ivy Wall",
      date: "Sunny Afternoon",
      location: "The Green Wall",
      image: "assets/photos/tia/tia_13.jpeg",
      caption: "Your radiant smile against the green leaves is the purest picture of joy. Having you in my life makes every dark day bright.",
      rotation: "-1.8deg",
      tapeColor: "sage"
    },
    {
      id: "mem-4",
      category: "adventures",
      categoryLabel: "Adventures",
      title: "Cafe Lights & Stolen Moments",
      date: "Evening Coffee",
      location: "Our Favorite Corner",
      image: "assets/photos/tia/tia_18.jpeg",
      caption: "Two best friends sharing smiles over coffee cups. Looking at you across the table is where my heart always felt most at peace.",
      rotation: "2.2deg",
      tapeColor: "peach"
    },
    {
      id: "mem-5",
      category: "unfiltered",
      categoryLabel: "Unfiltered",
      title: "Pizza Feasts & Pure Joy",
      date: "Airport Window",
      location: "Travel Hours",
      image: "assets/photos/tia/tia_34.jpeg",
      caption: "Mid-bite pizza slice, totally unfiltered and effortlessly cute. The best moments are always the simplest ones with you.",
      rotation: "-3.2deg",
      tapeColor: "rose"
    },
    {
      id: "mem-6",
      category: "best-buds",
      categoryLabel: "Forever",
      title: "Partners in Crime for Life",
      date: "Timeless",
      location: "By Your Side",
      image: "assets/photos/tia/tia_24.jpeg",
      caption: "Thumbs up to the world! No matter where life leads us, I cannot picture any version of my future without you in it.",
      rotation: "1.5deg",
      tapeColor: "gold"
    }
  ],

  // Reasons Why You Mean the World (Bento Grid Sticky Notes & Cards)
  reasons: [
    {
      id: "reason-1",
      gridSpan: "col-span-12 md:col-span-8 lg:col-span-8",
      icon: "sparkles",
      title: "The Radiance of Your Laugh",
      category: "Pure Magic",
      shortDescription: "A melody that instantly dissolves every worry in my world.",
      revealedContent: "Your genuine, crinkled-eye laugh is my absolute favorite sound in existence. Whenever you burst into uncontrollable giggles, my entire day glows brighter. It's impossible not to smile when your happiness fills the room, Kunju.",
      accentGradient: "from-[#B7605F]/20 via-[#F08A78]/15 to-transparent",
      badge: "Favorite Melody 🎵",
      interactiveType: "flip"
    },
    {
      id: "reason-2",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "heart-handshake",
      title: "Our 8th Standard Spark",
      category: "Pala Days",
      shortDescription: "A classroom memory that quietly defined my heart.",
      revealedContent: "Ever since 8th standard in Pala when I first saw you, there was an unspoken fascination. I carried that quiet spark for years, watching you grow into the most remarkable person I know.",
      accentGradient: "from-[#ECC880]/30 via-[#B7605F]/15 to-transparent",
      badge: "Carmel & Chavara 🎒",
      interactiveType: "flip"
    },
    {
      id: "reason-3",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "moon",
      title: "Late Night Banter at Blossom",
      category: "Soul Connection",
      shortDescription: "Where hours turn to seconds and comfortable silence feels like home.",
      revealedContent: "Those late-night conversations over tea outside Blossom and long phone calls when the world gets quiet. You think of me as your best bud, but to me, you are my whole world.",
      accentGradient: "from-[#899481]/25 via-[#B7605F]/15 to-transparent",
      badge: "Midnight Talks ☕",
      interactiveType: "flip"
    },
    {
      id: "reason-4",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "flame",
      title: "Your Adorable Unfiltered Goofiness",
      category: "Pure Joy",
      shortDescription: "From Among Us head crowns to sleeping peacefully on road trips.",
      revealedContent: "The silly faces in store mirrors, falling asleep in the passenger seat on rainy days, and agreeing to goofy Among Us filters without hesitation. Your real, unfiltered self is perfection.",
      accentGradient: "from-[#F08A78]/25 via-[#FFB2A6]/15 to-transparent",
      badge: "Endless Fun 🍕",
      interactiveType: "flip"
    },
    {
      id: "reason-5",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "coffee",
      title: "Our Food Dates & Pizza Runs",
      category: "Sweet Secrets",
      shortDescription: "Sharing slices, hot coffee, and unforgettable memories.",
      revealedContent: "Whether it is pizza at airport windows or warm tea at night, every meal with you is an adventure. You make the simplest routines feel like once-in-a-lifetime memories.",
      accentGradient: "from-[#ECC880]/25 via-[#F08A78]/15 to-transparent",
      badge: "Foodie Duo 🍔",
      interactiveType: "flip"
    },
    {
      id: "reason-6",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
      icon: "compass",
      title: "You Feel Like Home",
      category: "Sanctuary",
      shortDescription: "No matter where we are, beside you is where I belong.",
      revealedContent: "Home isn't a place or four walls anymore. Home is the ease of walking beside you, your voice greeting me after a long day, and the unconditional trust we share.",
      accentGradient: "from-[#899481]/25 via-[#B7605F]/15 to-transparent",
      badge: "Safe Haven 🏡",
      interactiveType: "scratch"
    },
    {
      id: "reason-7",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
      icon: "infinity",
      title: "Can't Picture My Future Without You",
      category: "Forever Vision",
      shortDescription: "Every tomorrow I dream of has your smile in it.",
      revealedContent: "I finally stopped running from the truth. In every future I imagine—every road trip, every triumph, every quiet morning—you are right there by my side. I want you in my life forever, Kunju.",
      accentGradient: "from-[#B7605F]/25 via-[#ECC880]/15 to-transparent",
      badge: "To Eternity 💍",
      interactiveType: "scratch"
    }
  ],

  // Endless Sweet Affirmations & Whispers Generator
  whispers: [
    "Happy Birthday to the girl who has held my heart since 8th standard.",
    "Every memory with you is a treasure I would protect with my whole life.",
    "You started as my favorite classmate in Pala, became my closest best friend, and turned into my whole future.",
    "Your smile in the morning could light up an entire galaxy.",
    "I cannot picture any version of my tomorrow without you by my side, Kunju.",
    "You make ordinary days feel like once-in-a-lifetime celebrations.",
    "Loving you is the easiest, most natural truth of my life.",
    "Happy Birthday, Kunju — you will forever be my favorite person in the cosmos."
  ],

  // Interactive Love Letter
  letter: {
    dateHeading: "On Your Special Birthday",
    greeting: "To My Dearest Kunju,",
    paragraphs: [
      "Happy Birthday, Kunju! As another year begins for you, I found myself thinking about all the paths our lives have crossed—and how lucky I am that out of every person in this world, I got to grow up with you by my side.",
      "You know me better than anyone. You treat me as your closest best friend, your trusted bud, the one who shares your banter, coffee runs, and endless laughs. But what you might not know is that my heart made up its mind a very long time ago—all the way back in 8th standard in Pala, the very first moment I saw you in that school hall.",
      "Back then, it was a quiet, unspoken fascination that I kept tucked away. Over the years, as we laughed through school hallways, shared car rides, and sat across each other at cafes talking about everything and nothing, that feeling didn't fade—it grew roots.",
      "For a long time, I tried to convince myself that being just your best friend was enough, scared that speaking my truth might complicate the bond we built. But recently, I finally stopped hiding from myself. I embraced what my soul has known for years: you are not just my best friend, Kunju—you are the only person I can ever envision in my future.",
      "I cannot picture any version of my tomorrow that doesn't have your smile in it. Whatever comes next, I promise to always cheer you on, protect your peace, and stand by you. Happy Birthday, my favorite person in the whole universe."
    ],
    signOff: "Always by your side,",
    signatureName: "Kevin ❤️",
    waxSealText: "FOREVER & ALWAYS • KUNJU •",
    typingSpeed: 20
  },

  // Grand Finale Modal & Declaration
  finale: {
    buttonLabel: "Open My Entire Heart ✨",
    modalTitle: "Happy Birthday to My Dearest Kunju 🎂✨",
    modalSubtitle: "From 8th standard school days in Pala to our whole future ahead.",
    quote: "“Some people search their whole lives for what I found the day you walked into my world.”",
    closingNote: "Thank you for being my favorite memory, my dearest best friend, and my whole heart. Happy Birthday, Kunju!",
    confettiColors: ['#B7605F', '#F08A78', '#ECC880', '#899481', '#FCF8F2', '#FFB2A6']
  },

  // Secret Scrapbook Compartment (Vault feature)
  secretVault: {
    enabled: true,
    passcodePrompt: "Enter our secret diary key (e.g. kunju, kevin, 8th standard, birthday)",
    validCodes: ["kunju", "tia", "kevin", "birthday", "8thstandard", "8th", "bestfriend", "forever", "123987", "140323"],
    title: "✨ Secret Keepsake Chamber Unlocked ✨",
    secretMessage: "You found the most sacred chamber of my heart, Kunju! Standing beside you, laughing through the years, and building our world together—my forever begins and ends with you.",
    specialRewardPhoto: "assets/photos/tia/tia_15.jpeg",
    rewardCaption: "You found the most sacred chamber of my heart, Kunju! Standing beside you, laughing through the years, and building our world together—my forever begins and ends with you."
  }
};

if (typeof window !== "undefined") {
  window.SANCTUARY_CONFIG = SANCTUARY_CONFIG;
}