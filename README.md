# THE JOY OF BENGAL — Durga Puja cinematic site
Static, no build step. Upload everything to https://github.com/debangshuuii/the-joy-of-bengal/upload/main

## Replace media (you asked for this)
Put your own files here — same names, site updates automatically:
/assets/videos/hero.mp4 — hero background (1920x1080, muted, loop)
/assets/videos/night-kolkata.mp4 — night section
/assets/videos/kumartuli.mp4, college-square.mp4
/assets/videos/story-01.mp4, story-02.mp4, story-03.mp4
/assets/images/*.jpg — posters + cards
/assets/audio/dhak.mp3 — sound section (no autoplay by design)

If a local file is missing, demo Unsplash fallback shows so layout never breaks.

## Edit content without touching HTML
All text in `assets/js/data.js`:
JOURNEY, DESTINATIONS, KUMA_STEPS, HERITAGE, ART, FOODS, STORIES, ARCHIVE, PLACES

## Run locally
npx serve .  → open http://localhost:3000
or VS Code → Live Server on index.html

## Effects included (HackSpire-style)
Loader, Lenis smooth scroll, GSAP parallax, magnetic buttons, custom cursor EXPLORE/VIEW/PLAY, curved hero divider, count-up stats, sticky scroll-media swap (5 days + Kumartuli CLAY→GODDESS), 3D tilt cards, horizontal art scroll, night video, food filter, Leaflet map (no API key), plan-your-puja generator, masonry archive, video stories, finale fade, reduced-motion + lazy video.
