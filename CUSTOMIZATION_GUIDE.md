# 💖 Scrapbook & Digital Journal Customization Guide (Kunju & Kevin Edition)

This guide walks you through customizing and adding photos, memories, and personal notes to Kunju's birthday scrapbook and digital journal.

---

## 📸 Media Data Structure (`memories.ts` & `mediaData.js`)

All 47 memories are managed in **[`memories.ts`](file:///home/jo_vellappani/bebo/memories.ts)** (TypeScript) and **[`mediaData.js`](file:///home/jo_vellappani/bebo/mediaData.js)** (Browser runtime).

### Structure of a Media Item:
```javascript
{
  id: 1,
  type: "image",
  src: "assets/photos/tia/tia_01.jpeg",
  title: "The Unspoken Fascination ✨",
  caption: "Even when you are just looking away lost in thought, you have this effortless grace...",
  tag: "favorites", // 'school-days' | 'best-buds' | 'adventures' | 'unfiltered' | 'favorites'
  aspectRatio: "portrait" // 'portrait' | 'landscape' | 'square'
}
```

### Adding New Photos:
1. Save your photos in `assets/photos/tia/` or `assets/photos/kunju/` (e.g. `tia_48.jpeg`).
2. Add the entry to `mediaData.js` and `memories.ts`.

---

## 📖 Storytelling Diary Chapters

In [`index.html`](file:///home/jo_vellappani/bebo/index.html):
1. **Chapter I: "The Day Time Stood Still in 8th Standard 🎒"** (`#story-beginning`): Captures the Pala days (Carmel & Chavara) with dual polaroids (`tia_19.jpeg` on stage & `tia_47.jpeg` in uniform).
2. **Chapter II: "Best Buds, Everyday Magic & You ☕"** (`#story-whole-world`): Celebrates late-night banter outside Blossom, car rides, and Kevin's heartfelt confession.

---

## 🗝️ Secret Journal Compartment Keys

- Keys: `kunju`, `tia`, `kevin`, `birthday`, `8thstandard`, `8th`, `bestfriend`, `forever`, `123987`
- Cover Lock Screen PIN: `123987`

---

## 🎨 Color Palette Reference

- Warm Cream Background: `#FCF8F2`
- Aged Journal Paper: `#F7EFE5`
- Primary Terracotta: `#B7605F`
- Soft Peach: `#F08A78`
- Vintage Deep Maroon: `#684045`
- Sage Green: `#899481`
- Earthy Charcoal Ink: `#2B2225`
