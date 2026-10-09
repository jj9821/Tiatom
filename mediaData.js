/**
 * ============================================================================
 * 💖 CONSOLIDATED MEMORY SANCTUARY DATA (Kevin & Kunju - Scrapbook Journal)
 * ============================================================================
 * 47 Authentic Memories, School Days in Pala, and Best Friend Adventures
 * ============================================================================
 */

const MEDIA_ITEMS = [
  {
    "id": 1,
    "type": "image",
    "src": "assets/photos/tia/tia_01.jpeg",
    "title": "The Unspoken Fascination \u2728",
    "caption": "Even when you are just looking away lost in thought, you have this effortless grace that caught my eye years ago in 8th standard and never let go.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 2,
    "type": "image",
    "src": "assets/photos/tia/tia_02.jpeg",
    "title": "Jhumkas & Stolen Glances \ud83d\udcab",
    "caption": "The silver jhumkas, the subtle smile, and the warmth you bring into every conversation. You make ordinary moments feel like poetry.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 3,
    "type": "image",
    "src": "assets/photos/tia/tia_03.jpeg",
    "title": "Peaceful Ride & Rainy Windows \ud83c\udf27\ufe0f",
    "caption": "Curled up asleep on a rainy car ride. Watching you sleep so peacefully made me realize how safe, gentle, and sacred your presence is to me.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 4,
    "type": "image",
    "src": "assets/photos/tia/tia_04.jpeg",
    "title": "Warm Tea & Endless Conversations \u2615",
    "caption": "One of our countless cafe dates where hours flew by like minutes. You never run out of stories, and I never run out of reasons to listen.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 5,
    "type": "image",
    "src": "assets/photos/tia/tia_05.jpeg",
    "title": "That Thoughtful Look I Love \ud83d\udcad",
    "caption": "You have this adorable habit of getting deep in thought right before dropping the funniest comment of the day.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 6,
    "type": "image",
    "src": "assets/photos/tia/tia_06.jpeg",
    "title": "Golden Hour Serenity \ud83c\udf05",
    "caption": "Bathed in warm amber light, looking effortlessly gorgeous without even trying. The world is noisy, but you are my quiet comfort.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 7,
    "type": "image",
    "src": "assets/photos/tia/tia_07.jpeg",
    "title": "My Favorite Dinner Company \ud83c\udf7d\ufe0f",
    "caption": "Sitting across from you is my definition of a perfect evening. Every meal is ten times sweeter with your laughter across the table.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 8,
    "type": "image",
    "src": "assets/photos/tia/tia_08.jpeg",
    "title": "The Smile That Heals Everything \ud83e\uddf1",
    "caption": "Leaning against the brick wall with that gentle, genuine smile. There is no bad day that your smile cannot instantly turn around.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 9,
    "type": "image",
    "src": "assets/photos/tia/tia_09.jpeg",
    "title": "Silk Saree Radiance \ud83c\udf38",
    "caption": "You in this magenta silk saree was an absolute breath of fresh air. Pure elegance, unmatched charm, and a timeless beauty.",
    "tag": "school-days",
    "aspectRatio": "portrait"
  },
  {
    "id": 10,
    "type": "image",
    "src": "assets/photos/tia/tia_10.jpeg",
    "title": "Garden of My Thoughts \ud83c\udf3f",
    "caption": "Sitting in the garden looking like a daydream. Ever since school days, you have been the only girl who lived rent-free in my mind.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 11,
    "type": "image",
    "src": "assets/photos/tia/tia_11.jpeg",
    "title": "The Busy Multitasker \ud83d\udcf1",
    "caption": "Furiously replying to texts while I sneakily captured this candid. Even in your focused moments, you are endlessly adorable.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 12,
    "type": "image",
    "src": "assets/photos/tia/tia_12.jpeg",
    "title": "Our Monochromatic Comfort \ud83e\udd0d",
    "caption": "Just the two of us, side by side. Black and white stripped away the noise, leaving just the pure happiness of having you near.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 13,
    "type": "image",
    "src": "assets/photos/tia/tia_13.jpeg",
    "title": "The Sunshine Behind Green Leaves \ud83c\udf43",
    "caption": "That full-hearted, ear-to-ear smile against the ivy wall. This is my absolute favorite photo of you\u2014it holds the entire sunshine of my life.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 14,
    "type": "image",
    "src": "assets/photos/tia/tia_14.jpeg",
    "title": "Late Night Banter at Blossom \u2615",
    "caption": "Leaning on the high table, talking until late outside Blossom. The way you listen and tease me is something I wouldn\u2019t trade for the world.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 15,
    "type": "image",
    "src": "assets/photos/tia/tia_15.jpeg",
    "title": "My Safe Haven & Eternal Promise \ud83e\udec2",
    "caption": "Arm around you, standing together against the world. You think of me as your best bud, but my heart has chosen you for eternity.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 16,
    "type": "image",
    "src": "assets/photos/tia/tia_16.jpeg",
    "title": "Neon Glow & Your Beautiful Eyes \ud83d\udd2e",
    "caption": "Sitting under the evening lights with your coffee cup. The world was rushing by, but with you, everything stood wonderfully still.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 17,
    "type": "image",
    "src": "assets/photos/tia/tia_17.jpeg",
    "title": "Always My Best Listener \ud83c\udfa7",
    "caption": "No matter how silly my rants are, you always pay attention with that curious look. Being around you feels like being completely home.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 18,
    "type": "image",
    "src": "assets/photos/tia/tia_18.jpeg",
    "title": "Kevin & Kunju \u2022 The Dream Team \ud83c\udf1f",
    "caption": "Look at us! Two best friends who grew up together, laughed together, and conquered everyday life together. You are my greatest blessing.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 19,
    "type": "image",
    "src": "assets/photos/tia/tia_19.jpeg",
    "title": "School Day Stage Spark \u2022 8th Standard \ud83d\udc83",
    "caption": "The school day celebrations where it all began! Watching you dance on stage in 8th standard lit a spark in my heart that never faded.",
    "tag": "school-days",
    "aspectRatio": "portrait"
  },
  {
    "id": 20,
    "type": "image",
    "src": "assets/photos/tia/tia_20.jpeg",
    "title": "Fitting Room Mirror Shenanigans \ud83d\udecd\ufe0f",
    "caption": "Shopping trips with you are 10% shopping and 90% taking funny mirror selfies and laughing at clothes neither of us will buy.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 21,
    "type": "image",
    "src": "assets/photos/tia/tia_21.jpeg",
    "title": "Cracking Up Together in the Aisle \ud83d\ude02",
    "caption": "You couldn\u2019t keep a straight face for more than two seconds. That spontaneous, uninhibited laugh of yours is my favorite soundtrack.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 22,
    "type": "image",
    "src": "assets/photos/tia/tia_22.jpeg",
    "title": "Sunlit Bliss & Pure Peace \u2600\ufe0f",
    "caption": "Eyes closed, soaking in the sunlight with a peaceful smile. You possess an inner peace that calms every chaotic corner of my soul.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 23,
    "type": "image",
    "src": "assets/photos/tia/tia_23.jpeg",
    "title": "Curls, Smiles & Radiant Soul \ud83d\udda4",
    "caption": "Dressed in black, curls framing your face, smiling into the distance. How someone can be both my closest friend and my greatest dream is a wonder.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 24,
    "type": "image",
    "src": "assets/photos/tia/tia_24.jpeg",
    "title": "Thumbs Up Partners in Crime \ud83d\udc4d",
    "caption": "Our classic thumbs-up pose! From silly inside jokes to life\u2019s biggest moments, we will always be an unbeatable duo.",
    "tag": "best-buds",
    "aspectRatio": "landscape"
  },
  {
    "id": 25,
    "type": "image",
    "src": "assets/photos/tia/tia_25.jpeg",
    "title": "Timeless Black & White Chemistry \ud83c\udfac",
    "caption": "The same partners in crime, timelessly captured. Some friendships are special, but what I feel for you transcends every word I know.",
    "tag": "best-buds",
    "aspectRatio": "landscape"
  },
  {
    "id": 26,
    "type": "image",
    "src": "assets/photos/tia/tia_26.jpeg",
    "title": "The Warmest Laugh in the Room \ud83d\udd6f\ufe0f",
    "caption": "You glanced over mid-conversation and smiled this way. I stopped hiding from myself long ago\u2014you are my present and my future, Kunju.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 27,
    "type": "image",
    "src": "assets/photos/tia/tia_27.jpeg",
    "title": "Eyes Speaking Volumes \ud83d\ude37",
    "caption": "Mask on, yet your expressive eyes gave everything away. You never needed words to tell me how you felt; I could always read your eyes.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 28,
    "type": "image",
    "src": "assets/photos/tia/tia_28.jpeg",
    "title": "Vintage Kodak Nostalgia \ud83c\udf9e\ufe0f",
    "caption": "Framed like an old Polaroid. Looking at this feels like looking at a friendship that was destined to turn into an eternal love story.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 29,
    "type": "image",
    "src": "assets/photos/tia/tia_29.jpeg",
    "title": "Sus Little Among Us Impostors \ud83d\ude80",
    "caption": "Only you would agree to take a picture with Among Us astronauts floating on our heads without questioning it! Our goofiness matches 100%.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 30,
    "type": "image",
    "src": "assets/photos/tia/tia_30.jpeg",
    "title": "Floating Hearts & Sweet Shenanigans \ud83d\udda4",
    "caption": "Black hearts filter selfie on the mountain slope. We\u2019ve climbed hills, weathered storms, and made memories that will outlast time.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 31,
    "type": "image",
    "src": "assets/photos/tia/tia_31.jpeg",
    "title": "Fresh Air & Sunshine Together \ud83c\udf3f",
    "caption": "Standing together under open skies. When I stand beside you like this, everything in life just makes total, effortless sense.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 32,
    "type": "image",
    "src": "assets/photos/tia/tia_32.jpeg",
    "title": "Peace Signs & Outdoor Adventures \u270c\ufe0f",
    "caption": "Posing on the nature trail. We started as two school kids in 8th grade, and today you are the most precious part of every adventure I take.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 33,
    "type": "image",
    "src": "assets/photos/tia/tia_33.jpeg",
    "title": "The Umbrella & Warm Smiles \u2602\ufe0f",
    "caption": "Holding the floral umbrella on a breezy afternoon. No matter the weather, having you near is all the sunshine I will ever need.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 34,
    "type": "image",
    "src": "assets/photos/tia/tia_34.jpeg",
    "title": "Pizza Dates & Food Comas \ud83c\udf55",
    "caption": "Caught mid-bite munching on pizza at the airport window! The most authentic, adorable, hilarious memory that proves how much fun we have.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 35,
    "type": "image",
    "src": "assets/photos/tia/tia_35.jpeg",
    "title": "Midnight Google Meet Calls \ud83d\udcf1",
    "caption": "Screen calls that lasted for hours when we couldn't meet in person. Just seeing your face on my phone made any exhausting day bearable.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 36,
    "type": "image",
    "src": "assets/photos/tia/tia_36.jpeg",
    "title": "Peace Signs & Paper Rings \u270c\ufe0f\u2728",
    "caption": "Double peace signs, goofy bee filters, and Taylor Swift playing in the background. Your bubbly joy is my favorite thing in the universe.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 37,
    "type": "image",
    "src": "assets/photos/tia/tia_37.jpeg",
    "title": "Palm Tree Shadows & Quiet Smiles \ud83c\udf34",
    "caption": "Standing beside each other under the tropical sun. You thought we were just two buddies posing, while my heart was racing right beside you.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 38,
    "type": "image",
    "src": "assets/photos/tia/tia_38.jpeg",
    "title": "School Gates & Hallway Days \ud83c\udf92",
    "caption": "Uniforms, backpacks, school lanyards, and endless memories. Those school days were the best days of my life because you were in them.",
    "tag": "school-days",
    "aspectRatio": "portrait"
  },
  {
    "id": 39,
    "type": "image",
    "src": "assets/photos/tia/tia_39.jpeg",
    "title": "Chalkboard Cafe & Po'Boys Grill \ud83c\udf54",
    "caption": "Resting your chin on your hand at Po'Boys Grill in Pala. You looked so effortlessly beautiful sitting across the table from me.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 40,
    "type": "image",
    "src": "assets/photos/tia/tia_40.jpeg",
    "title": "Butterflies & Gentle Eyes \ud83e\udd8b",
    "caption": "Glowing butterflies around your hair. You've always had this magical warmth that makes everyone around you feel cherished and happy.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 41,
    "type": "image",
    "src": "assets/photos/tia/tia_41.jpeg",
    "title": "Winter Scarf & Morning Sunshine \ud83e\udde3\u2600\ufe0f",
    "caption": "Sunlight filtering through the leaves onto your face. Wrapped in your cozy scarf, your smile was all the warmth I needed.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 42,
    "type": "image",
    "src": "assets/photos/tia/tia_42.jpeg",
    "title": "Black Gown Elegance & Grace \ud83d\udda4\ud83d\udc51",
    "caption": "Looking like pure royalty in that black gown with pearls on the veranda steps. Breathlessly stunning in every single way.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 43,
    "type": "image",
    "src": "assets/photos/tia/tia_43.jpeg",
    "title": "Carmel Days & Unbreakable Bonds \ud83c\udfeb",
    "caption": "Another golden snapshot from our school days. Looking back now, every step beside you was leading to the confession in my heart today.",
    "tag": "school-days",
    "aspectRatio": "portrait"
  },
  {
    "id": 44,
    "type": "image",
    "src": "assets/photos/tia/tia_44.jpeg",
    "title": "Beside You Is Where I Belong \ud83c\udf3f",
    "caption": "Close-up selfie under the coconut grove. The comfort of standing right by your side is something I never want to let go of.",
    "tag": "best-buds",
    "aspectRatio": "portrait"
  },
  {
    "id": 45,
    "type": "image",
    "src": "assets/photos/tia/tia_45.jpeg",
    "title": "Goofy Horns & Partner In Crime \ud83d\ude08",
    "caption": "Devil horns filter outside school! You will always be my favorite partner in crime, the one who brings out my biggest smiles.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 46,
    "type": "image",
    "src": "assets/photos/tia/tia_46.jpeg",
    "title": "Bicycle Rides & Roadside Chips \ud83d\udeb2\ud83c\udf5f",
    "caption": "Leaning on your Hero cycle basket loaded with Lay's and peanuts on an afternoon ride. You in your oversized tee, happy and completely yourself.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 47,
    "type": "image",
    "src": "assets/photos/tia/tia_47.jpeg",
    "title": "The School Hallway Keepsake \ud83d\udcf8",
    "caption": "The ultimate school keepsake. Two kids from Carmel and Chavara in Pala, best friends through thick and thin, and the girl who has held my heart since 8th standard.",
    "tag": "school-days",
    "aspectRatio": "portrait"
  }
];

if (typeof window !== "undefined") {
  window.MEDIA_ITEMS = MEDIA_ITEMS;
  window.memoriesData = MEDIA_ITEMS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { MEDIA_ITEMS };
}
