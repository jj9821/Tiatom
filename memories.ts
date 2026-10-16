/**
 * ============================================================================
 * 💖 MEMORIES DATA STORE (Scrapbook Journal Emoji Edition)
 * ============================================================================
 */

export interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  caption: string;
  tag: string;
  aspectRatio: "portrait" | "landscape" | "square";
  emojis?: string;
  description?: string;
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    "id": 1,
    "type": "image",
    "src": "assets/photos/tia/tia_02.jpeg",
    "title": "💫 ✨ 🌸",
    "caption": "💫 🌸 ✨ 💖",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "💫 ✨ 🌸"
  },
  {
    "id": 2,
    "type": "image",
    "src": "assets/photos/tia/tia_03.jpeg",
    "title": "🌧️ 💤 🚗",
    "caption": "🌧️ 💤 🚗 🤍",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "🌧️ 💤 🚗"
  },
  {
    "id": 3,
    "type": "image",
    "src": "assets/photos/tia/tia_04.jpeg",
    "title": "☕ 🧋 💬",
    "caption": "☕ 💬 🧋 💖",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "☕ 🧋 💬"
  },
  {
    "id": 4,
    "type": "image",
    "src": "assets/photos/tia/tia_05.jpeg",
    "title": "💭 🌷 ✨",
    "caption": "💭 🌷 ✨ 🥰",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "💭 🌷 ✨"
  },
  {
    "id": 5,
    "type": "image",
    "src": "assets/photos/tia/tia_06.jpeg",
    "title": "🌅 🍯 💛",
    "caption": "🌅 💛 🍯 ✨",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🌅 🍯 💛"
  },
  {
    "id": 6,
    "type": "image",
    "src": "assets/photos/tia/tia_07.jpeg",
    "title": "🍽️ 🍰 🥂",
    "caption": "🍽️ 🍰 🥂 😋",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🍽️ 🍰 🥂"
  },
  {
    "id": 7,
    "type": "image",
    "src": "assets/photos/tia/tia_08.jpeg",
    "title": "🧱 💖 😊",
    "caption": "🧱 😊 💖 🌸",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🧱 💖 😊"
  },
  {
    "id": 8,
    "type": "image",
    "src": "assets/photos/tia/tia_09.jpeg",
    "title": "🌸 🥻 ✨",
    "caption": "🌸 🥻 ✨ 💖",
    "tag": "school-days",
    "aspectRatio": "portrait",
    "emojis": "🌸 🥻 ✨"
  },
  {
    "id": 9,
    "type": "image",
    "src": "assets/photos/tia/tia_10.jpeg",
    "title": "🌿 🍃 🌺",
    "caption": "🌿 🍃 🌺 💚",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🌿 🍃 🌺"
  },
  {
    "id": 10,
    "type": "image",
    "src": "assets/photos/tia/tia_11.jpeg",
    "title": "📱 💬 🤫",
    "caption": "📱 💬 🤫 🤭",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "📱 💬 🤫"
  },
  {
    "id": 11,
    "type": "image",
    "src": "assets/photos/tia/tia_12.jpeg",
    "title": "🤍 ☕ 🫶",
    "caption": "🤍 ☕ 🫶 ✨",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🤍 ☕ 🫶"
  },
  {
    "id": 12,
    "type": "image",
    "src": "assets/photos/tia/tia_13.jpeg",
    "title": "🍃 ☀️ 🌼",
    "caption": "🍃 ☀️ 🌼 🌿",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🍃 ☀️ 🌼"
  },
  {
    "id": 13,
    "type": "image",
    "src": "assets/photos/tia/tia_14.jpeg",
    "title": "🌙 ☕ 🌃",
    "caption": "🌙 ☕ 🌃 💫",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🌙 ☕ 🌃"
  },
  {
    "id": 14,
    "type": "image",
    "src": "assets/photos/tia/tia_15.jpeg",
    "title": "🫂 💖 🌸",
    "caption": "🫂 💖 🌸 🫶",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🫂 💖 🌸"
  },
  {
    "id": 15,
    "type": "image",
    "src": "assets/photos/tia/tia_16.jpeg",
    "title": "🔮 💫 👀",
    "caption": "🔮 💫 👀 ✨",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🔮 💫 👀"
  },
  {
    "id": 16,
    "type": "image",
    "src": "assets/photos/tia/tia_17.jpeg",
    "title": "🎧 💬 🤍",
    "caption": "🎧 💬 🤍 ☕",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🎧 💬 🤍"
  },
  {
    "id": 17,
    "type": "image",
    "src": "assets/photos/tia/tia_18.jpeg",
    "title": "🌟 ☕ 👫",
    "caption": "🌟 ☕ 👫 💫",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🌟 ☕ 👫"
  },
  {
    "id": 18,
    "type": "image",
    "src": "assets/photos/tia/tia_19.jpeg",
    "title": "💃 🎒 🏫",
    "caption": "💃 🎒 🏫 ✨",
    "tag": "school-days",
    "aspectRatio": "portrait",
    "emojis": "💃 🎒 🏫"
  },
  {
    "id": 19,
    "type": "image",
    "src": "assets/photos/tia/tia_20.jpeg",
    "title": "🪞 🛍️ 🤳",
    "caption": "🪞 🛍️ 🤳 💅",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🪞 🛍️ 🤳"
  },
  {
    "id": 20,
    "type": "image",
    "src": "assets/photos/tia/tia_21.jpeg",
    "title": "😂 🛒 🤪",
    "caption": "😂 🛒 🤪 🤣",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "😂 🛒 🤪"
  },
  {
    "id": 21,
    "type": "image",
    "src": "assets/photos/tia/tia_22.jpeg",
    "title": "☀️ 🍃 💛",
    "caption": "☀️ 🍃 💛 ✨",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "☀️ 🍃 💛"
  },
  {
    "id": 22,
    "type": "image",
    "src": "assets/photos/tia/tia_23.jpeg",
    "title": "🖤 🌀 💫",
    "caption": "🖤 🌀 💫 🫶",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🖤 🌀 💫"
  },
  {
    "id": 23,
    "type": "image",
    "src": "assets/photos/tia/tia_24.jpeg",
    "title": "👍 👯‍♀️ ✌️",
    "caption": "👍 👯‍♀️ ✌️ 💖",
    "tag": "best-buds",
    "aspectRatio": "landscape",
    "emojis": "👍 👯‍♀️ ✌️"
  },
  {
    "id": 24,
    "type": "image",
    "src": "assets/photos/tia/tia_25.jpeg",
    "title": "🎬 🎞️ 🖤",
    "caption": "🎬 🎞️ 🖤 🤍",
    "tag": "best-buds",
    "aspectRatio": "landscape",
    "emojis": "🎬 🎞️ 🖤"
  },
  {
    "id": 25,
    "type": "image",
    "src": "assets/photos/tia/tia_26.jpeg",
    "title": "🕯️ 🧡 😊",
    "caption": "🕯️ 🧡 😊 🪔",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🕯️ 🧡 😊"
  },
  {
    "id": 26,
    "type": "image",
    "src": "assets/photos/tia/tia_27.jpeg",
    "title": "😷 👀 ✨",
    "caption": "😷 👀 ✨ 💖",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "😷 👀 ✨"
  },
  {
    "id": 27,
    "type": "image",
    "src": "assets/photos/tia/tia_28.jpeg",
    "title": "🎞️ 🌻 😜",
    "caption": "🎞️ 🌻 😜 📸",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🎞️ 🌻 😜"
  },
  {
    "id": 28,
    "type": "image",
    "src": "assets/photos/tia/tia_29.jpeg",
    "title": "🚀 👾 🎮",
    "caption": "🚀 👾 🎮 🤫",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "🚀 👾 🎮"
  },
  {
    "id": 29,
    "type": "image",
    "src": "assets/photos/tia/tia_30.jpeg",
    "title": "🖤 ⛰️ 🫶",
    "caption": "🖤 ⛰️ 🫶 🌲",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "🖤 ⛰️ 🫶"
  },
  {
    "id": 30,
    "type": "image",
    "src": "assets/photos/tia/tia_31.jpeg",
    "title": "🌿 ☀️ 👫",
    "caption": "🌿 ☀️ 👫 💚",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🌿 ☀️ 👫"
  },
  {
    "id": 31,
    "type": "image",
    "src": "assets/photos/tia/tia_32.jpeg",
    "title": "✌️ 🌲 🎒",
    "caption": "✌️ 🌲 🎒 🏞️",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "✌️ 🌲 🎒"
  },
  {
    "id": 32,
    "type": "image",
    "src": "assets/photos/tia/tia_33.jpeg",
    "title": "☂️ 🌧️ 🌸",
    "caption": "☂️ 🌧️ 🌸 🤍",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "☂️ 🌧️ 🌸"
  },
  {
    "id": 33,
    "type": "image",
    "src": "assets/photos/tia/tia_34.jpeg",
    "title": "🍕 😋 🥤",
    "caption": "🍕 😋 🥤 ✨",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "🍕 😋 🥤"
  },
  {
    "id": 34,
    "type": "image",
    "src": "assets/photos/tia/tia_35.jpeg",
    "title": "📱 🌙 💻",
    "caption": "📱 🌙 💻 🫶",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "📱 🌙 💻"
  },
  {
    "id": 35,
    "type": "image",
    "src": "assets/photos/tia/tia_36.jpeg",
    "title": "✌️ 🐝 ✨",
    "caption": "✌️ 🐝 ✨ 💖",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "✌️ 🐝 ✨"
  },
  {
    "id": 36,
    "type": "image",
    "src": "assets/photos/tia/tia_37.jpeg",
    "title": "🌴 🌤️ 🥥",
    "caption": "🌴 🌤️ 🥥 💚",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🌴 🌤️ 🥥"
  },
  {
    "id": 37,
    "type": "image",
    "src": "assets/photos/tia/tia_38.jpeg",
    "title": "🎒 🏫 👭",
    "caption": "🎒 🏫 👭 📚",
    "tag": "school-days",
    "aspectRatio": "portrait",
    "emojis": "🎒 🏫 👭"
  },
  {
    "id": 38,
    "type": "image",
    "src": "assets/photos/tia/tia_39.jpeg",
    "title": "🍔 🍟 🥤",
    "caption": "🍔 🍟 🥤 😋",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🍔 🍟 🥤"
  },
  {
    "id": 39,
    "type": "image",
    "src": "assets/photos/tia/tia_40.jpeg",
    "title": "🦋 💖 ✨",
    "caption": "🦋 💖 ✨ 🌸",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🦋 💖 ✨"
  },
  {
    "id": 40,
    "type": "image",
    "src": "assets/photos/tia/tia_41.jpeg",
    "title": "🧣 ☀️ 🍂",
    "caption": "🧣 ☀️ 🍂 💛",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🧣 ☀️ 🍂"
  },
  {
    "id": 41,
    "type": "image",
    "src": "assets/photos/tia/tia_42.jpeg",
    "title": "🖤 👑 👗",
    "caption": "🖤 👑 👗 ✨",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🖤 👑 👗"
  },
  {
    "id": 42,
    "type": "image",
    "src": "assets/photos/tia/tia_43.jpeg",
    "title": "🏫 🎒 📖",
    "caption": "🏫 🎒 📖 💫",
    "tag": "school-days",
    "aspectRatio": "portrait",
    "emojis": "🏫 🎒 📖"
  },
  {
    "id": 43,
    "type": "image",
    "src": "assets/photos/tia/tia_44.jpeg",
    "title": "🌿 🌴 💚",
    "caption": "🌿 🌴 💚 🫶",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🌿 🌴 💚"
  },
  {
    "id": 44,
    "type": "image",
    "src": "assets/photos/tia/tia_45.jpeg",
    "title": "😈 🤪 🤘",
    "caption": "😈 🤪 🤘 😂",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "😈 🤪 🤘"
  },
  {
    "id": 45,
    "type": "image",
    "src": "assets/photos/tia/tia_46.jpeg",
    "title": "🚲 🍟 🧺",
    "caption": "🚲 🍟 🧺 😋",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "🚲 🍟 🧺"
  },
  {
    "id": 46,
    "type": "image",
    "src": "assets/photos/tia/tia_47.jpeg",
    "title": "🏫 🎒 👫",
    "caption": "🏫 🎒 👫 💖",
    "tag": "school-days",
    "aspectRatio": "portrait",
    "emojis": "🏫 🎒 👫"
  },
  {
    "id": 47,
    "type": "video",
    "src": "assets/videos/tia_vid_01.mp4",
    "poster": "assets/posters/tia_vid_01.jpg",
    "title": "🍽️ 😊 🤍",
    "caption": "Food date fun & sauce plate smiles 🍽️ 😊 🤍",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "🍽️ 😊 🤍"
  },
  {
    "id": 48,
    "type": "video",
    "src": "assets/videos/tia_vid_02.mp4",
    "poster": "assets/posters/tia_vid_02.jpg",
    "title": "🍎 💎 ✨",
    "caption": "Apple picking & certified wifey material 🍎 💎 ✨",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🍎 💎 ✨"
  },
  {
    "id": 49,
    "type": "video",
    "src": "assets/videos/tia_vid_03.mp4",
    "poster": "assets/posters/tia_vid_03.jpg",
    "title": "👊 👫 💫",
    "caption": "Partners in crime fist bump 👊 👫 💫",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "👊 👫 💫"
  },
  {
    "id": 50,
    "type": "video",
    "src": "assets/videos/tia_vid_04.mp4",
    "poster": "assets/posters/tia_vid_04.jpg",
    "title": "🏛️ 🌿 🚶‍♀️",
    "caption": "Strolling through vintage lanes together 🏛️ 🌿 🚶‍♀️",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🏛️ 🌿 🚶‍♀️"
  },
  {
    "id": 51,
    "type": "video",
    "src": "assets/videos/tia_vid_05.mp4",
    "poster": "assets/posters/tia_vid_05.jpg",
    "title": "💃 ☕ 🎶",
    "caption": "Spontaneous midnight cafe dance moves 💃 ☕ 🎶",
    "tag": "unfiltered",
    "aspectRatio": "portrait",
    "emojis": "💃 ☕ 🎶"
  },
  {
    "id": 52,
    "type": "video",
    "src": "assets/videos/tia_vid_06.mp4",
    "poster": "assets/posters/tia_vid_06.jpg",
    "title": "🍹 🍋 🧊",
    "caption": "Refreshing cafe coolers & heartfelt conversations 🍹 🍋 🧊",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🍹 🍋 🧊"
  },
  {
    "id": 53,
    "type": "video",
    "src": "assets/videos/tia_vid_07.mp4",
    "poster": "assets/posters/tia_vid_07.jpg",
    "title": "🏍️ 🍦 💛",
    "caption": "Royal Enfield bike ride ice cream stop 🏍️ 🍦 💛",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🏍️ 🍦 💛"
  },
  {
    "id": 54,
    "type": "image",
    "src": "assets/photos/tia/tia_48.jpeg",
    "title": "🚗 👫 💖",
    "caption": "🚗 👫 💖 ✨",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🚗 👫 💖",
    "description": "Cruising together with the windows down, your sweet smile right beside me making every road trip unforgettable."
  },
  {
    "id": 55,
    "type": "image",
    "src": "assets/photos/tia/tia_49.jpeg",
    "title": "✨ 🖤 👫",
    "caption": "✨ 🖤 👫 💫",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "✨ 🖤 👫",
    "description": "Side by side with you. The way we fit together effortlessly will always be the greatest feeling in the world."
  },
  {
    "id": 56,
    "type": "image",
    "src": "assets/photos/tia/tia_50.jpeg",
    "title": "🌸 ✨ 🥰",
    "caption": "🌸 ✨ 🥰 💖",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🌸 ✨ 🥰",
    "description": "Your effortless, glowing smile that lights up entire rooms. Truly the prettiest sight my eyes have ever seen."
  },
  {
    "id": 57,
    "type": "image",
    "src": "assets/photos/tia/tia_51.jpeg",
    "title": "🛍️ 📱 💫",
    "caption": "🛍️ 📱 💫 🤍",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🛍️ 📱 💫",
    "description": "Mirror selfies while roaming stores together—every errand feels like a special date with you."
  },
  {
    "id": 58,
    "type": "image",
    "src": "assets/photos/tia/tia_52.jpeg",
    "title": "🤍 🕊️ 📸",
    "caption": "🤍 🕊️ 📸 ✨",
    "tag": "best-buds",
    "aspectRatio": "portrait",
    "emojis": "🤍 🕊️ 📸",
    "description": "Accidentally matching neutral tones, standing together as you give that cute, thoughtful look."
  },
  {
    "id": 59,
    "type": "image",
    "src": "assets/photos/tia/tia_53.jpeg",
    "title": "🥰 ☕ 💛",
    "caption": "🥰 ☕ 💛 🌸",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🥰 ☕ 💛",
    "description": "Sitting close, leaning our heads together with the warmest smiles. In moments like this, nothing else matters."
  },
  {
    "id": 60,
    "type": "video",
    "src": "assets/videos/tia_vid_08.mp4",
    "poster": "assets/posters/tia_vid_08.jpg",
    "title": "🏺 🛍️ ✨",
    "caption": "🏺 🛍️ ✨ 💫",
    "tag": "adventures",
    "aspectRatio": "portrait",
    "emojis": "🏺 🛍️ ✨",
    "description": "Watching you curiously browse through vintage handicrafts and trinkets with that gentle fascination in your eyes."
  },
  {
    "id": 61,
    "type": "video",
    "src": "assets/videos/tia_vid_09.mp4",
    "poster": "assets/posters/tia_vid_09.jpg",
    "title": "🌅 🌊 🕊️",
    "caption": "🌅 🌊 🕊️ 💛",
    "tag": "favorites",
    "aspectRatio": "portrait",
    "emojis": "🌅 🌊 🕊️",
    "description": "Standing on the shoreline rocks as the golden sun dips into the sea. Pure poetry, watching the girl who holds my heart."
  }
];

if (typeof window !== "undefined") {
  (window as any).MEDIA_ITEMS = MEDIA_ITEMS;
  (window as any).memoriesData = MEDIA_ITEMS;
}

export default MEDIA_ITEMS;
