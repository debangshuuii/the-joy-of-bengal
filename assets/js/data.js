/* CENTRAL CONTENT — edit here, no need to touch HTML.
   Replace image/video paths with your own files in /assets/ */
const SITE = { title: "DURGA PUJA — The City Comes Alive" };

const JOURNEY = [
  {k:"MAHALAYA", d:"10 October 2026 · The invocation — the city listens.", desc:"Dawn chants herald the countdown. Workshops quicken in Kumartuli.", img:"assets/images/mahalaya.jpg", fb:"https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?q=80&w=1200&auto=format&fit=crop"},
  {k:"SHASHTI", d:"16 October 2026 · The unveiling — faces revealed.", desc:"Pandal doors open. First evening of wandering begins.", img:"assets/images/shasthi.jpg", fb:"https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1200&auto=format&fit=crop"},
  {k:"SAPTAMI", d:"18 October 2026 · The rhythm builds.", desc:"Dhak beats steady. Lanes fill with families and cameras.", img:"assets/images/saptami.jpg", fb:"https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop"},
  {k:"ASHTAMI", d:"19 October 2026 · The peak — devotion and light.", desc:"Anjali in the morning, pandal-hopping all night.", img:"https://media.istockphoto.com/id/1044388312/photo/priest-worshipping-goddess-durga-durga-puja-festival-celebration.jpg?s=612x612&w=0&k=20&c=2gSi9xnnQhHWBxKKHREP9t4xEF70Mg4HoQwoeHEl6GU=", fb:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1200&auto=format&fit=crop"},
  {k:"NAVAMI", d:"20 October 2026 · The celebration.", desc:"Food, friends, last long walks through lit streets.", img:"assets/images/navami.jpg", fb:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"},
  {k:"DASHAMI", d:"21 October 2026 · The farewell — Bhashan.", desc:"Sindur, drums, procession to the ghats. Until next year.", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop"},
];

const DESTINATIONS = [
  {name:"Kumartuli", cat:"CRAFT", loc:"North Kolkata • 22.59,88.36", desc:"Historic clay-art quarter where idols take form. Workshops, straw frames, paint.", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop", video:"assets/videos/kumartuli.mp4"},
  {name:"College Square", cat:"PANDAL", loc:"Central Kolkata", desc:"Lake reflections, lights and one of the most photographed immersions.", img:"https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop", video:"assets/videos/college-square.mp4"},
  {name:"Bagbazar", cat:"HERITAGE", loc:"North Kolkata", desc:"Century-old sarbojanin puja with traditional rituals.", img:"https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?q=80&w=800&auto=format&fit=crop", video:""},
  {name:"Deshapriya Park", cat:"PANDAL", loc:"South Kolkata", desc:"Known for large-scale installations and crowds.", img:"https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=800&auto=format&fit=crop", video:""},
  {name:"Ekdalia Evergreen", cat:"PANDAL", loc:"South Kolkata", desc:"Classic grandeur — a must-visit evening stop.", img:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=800&auto=format&fit=crop", video:""},
  {name:"Sovabazar Rajbari", cat:"HERITAGE", loc:"North Kolkata", desc:"Bonedi-bari puja — courtyard, chandeliers, tradition.", img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", video:""},
];

const KUMA_STEPS = [
  {t:"CLAY", d:"Ganges clay mixed with straw — the base of every form.", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop"},
  {t:"FORM", d:"Straw frames bound, limbs shaped by hand.", img:"https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?q=80&w=1200&auto=format&fit=crop"},
  {t:"DETAIL", d:"Fingers, eyes, weapons — weeks of patient work.", img:"https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1200&auto=format&fit=crop"},
  {t:"COLOUR", d:"Natural pigments, gold leaf, bold eyes (chokkhu daan).", img:"https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop"},
  {t:"THE GODDESS", d:"She leaves the workshop — the city welcomes her.", img:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1200&auto=format&fit=crop"},
];

const HERITAGE = [
  {n:"Victoria Memorial", d:"Marble icon by the Maidan — evening lights.", img:"https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=600&auto=format&fit=crop", lat:22.5448, lng:88.3426},
  {n:"Howrah Bridge", d:"Steel cantilever over the Hooghly.", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop", lat:22.5851, lng:88.3468},
  {n:"Prinsep Ghat", d:"Riverside colonnade, best at dusk.", img:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=600&auto=format&fit=crop", lat:22.5558, lng:88.3297},
  {n:"College Street", d:"Book lanes and coffee-house adda.", img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", lat:22.5744, lng:88.3628},
];

const ART = [
  {t:"Light & Bamboo", img:"https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1000&auto=format&fit=crop"},
  {t:"Clay Installation", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop"},
  {t:"Night Facade", img:"https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1000&auto=format&fit=crop"},
  {t:"Interior Craft", img:"https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?q=80&w=1000&auto=format&fit=crop"},
  {t:"Street Glow", img:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1000&auto=format&fit=crop"},
];

const FOODS = [
  {n:"Bhog", c:"bhog", d:"Khichdi, labra, chutney — community offering.", img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop"},
  {n:"Phuchka", c:"street", d:"Crisp, tangy, crowded stalls.", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop"},
  {n:"Kathi Roll", c:"street", d:"Park Street classic for pandal nights.", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"},
  {n:"Biryani", c:"street", d:"Late-night plates after hopping.", img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop"},
  {n:"Sandesh", c:"misti", d:"Nobin Chandra Das legacy.", img:"https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=600&auto=format&fit=crop"},
  {n:"Kosha Mangsho", c:"bhog", d:"Slow-cooked mutton, Puja feast.", img:"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=600&auto=format&fit=crop"},
  {n:"Mishti Doi", c:"misti", d:"Earthen-pot sweet curd.", img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop"},
  {n:"Chai & Adda", c:"street", d:"Bhar cha by the roadside.", img:"https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=600&auto=format&fit=crop"},
];

const STORIES = [
  {t:"THE ARTISAN", d:"Hands that shape the goddess. (replace video)", video:"assets/videos/story-01.mp4", poster:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop"},
  {t:"THE DHAAKI", d:"Rhythm of the drums. (replace video)", video:"assets/videos/story-02.mp4", poster:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"},
  {t:"THE VISITOR", d:"First night in the crowd. (replace video)", video:"assets/videos/story-03.mp4", poster:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=800&auto=format&fit=crop"},
];

const ARCHIVE = [
  {t:"College Square • Night", c:"Night", img:"https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop"},
  {t:"Kumartuli • Detail", c:"Craft", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop"},
  {t:"Street Glow", c:"Streets", img:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=800&auto=format&fit=crop"},
  {t:"Idol • Form", c:"Craft", img:"https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?q=80&w=800&auto=format&fit=crop"},
  {t:"Lights", c:"Night", img:"https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=800&auto=format&fit=crop"},
  {t:"Crowd", c:"People", img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"},
];

const PLACES = [
  {n:"Kumartuli", cat:"craft", lat:22.5996, lng:88.3570, d:"Clay-art quarter."},
  {n:"College Square", cat:"pandal", lat:22.5746, lng:88.3638, d:"Lake-side puja."},
  {n:"Bagbazar", cat:"pandal", lat:22.6035, lng:88.3658, d:"Heritage sarbojanin."},
  {n:"Deshapriya Park", cat:"pandal", lat:22.5167, lng:88.3479, d:"South Kolkata big install."},
  {n:"Victoria Memorial", cat:"heritage", lat:22.5448, lng:88.3426, d:"Maidan icon."},
  {n:"Prinsep Ghat", cat:"heritage", lat:22.5558, lng:88.3297, d:"Riverside dusk."},
  {n:"Park Street Rolls", cat:"food", lat:22.5550, lng:88.3500, d:"Late-night rolls."},
  {n:"College Street Food", cat:"food", lat:22.5744, lng:88.3628, d:"Book-lane snacks."},
];
