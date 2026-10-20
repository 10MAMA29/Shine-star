# ✦ Shine Star — Mutsumi Kuragane Portfolio

A premium, trilingual (EN / 日本語 / 中文) portfolio for **Mutsumi Kuragane** —
software developer, AI coding-evaluation specialist, and native Japanese language expert.

🔗 **Live site:** https://shine-star-mk.vercel.app/

## Highlights

- 🌌 **Original "Constellation of Craft" background** — a hand-authored deep-space
  nebula (SVG) with a living star-map: depth parallax, nodes that link into
  constellations, and a pulsing guiding star
- 🧠 **Per-section star motifs** that echo each section's meaning (a neural net for
  AI, three linked clusters for Languages, circuits for Skills, a node grid for Work)
- 🌐 **Real EN / 日本語 / 中文 language switcher** (full i18n, remembers your choice)
- 🎞️ **Self-authored "code that moves" showreel** — animated, no stock media
- 🖼️ **Live project thumbnails** generated from the referenced sites
- ✨ Scroll-reveal animations, count-up stats, filterable project grid, cursor glow
- 📱 Fully responsive · ♿ respects `prefers-reduced-motion` (static nebula fallback)

## Tech

Pure, dependency-free **HTML + CSS + vanilla JavaScript** — no build step.
All backgrounds are self-authored (SVG nebula + canvas star-map + CSS); fonts via
Google Fonts; live project screenshots via thum.io.

```
index.html           # structure
css/style.css         # cosmic theme + background system + animations
js/i18n.js            # EN / JA / ZH translations
js/main.js            # star-map canvas, interactions, project rendering
assets/bg-nebula.svg  # original deep-space nebula background
assets/favicon.png    # brain-constellation mark
```

## Deployment (Vercel)

Hosted on **Vercel** as a static site (no build step). Connect the GitHub repo once
in Vercel → **Add New… → Project → Import** `10MAMA29/Shine-star`; every push to `main`
then redeploys automatically. To get the `shine-star-mk.vercel.app` URL, set the Vercel
**Project Name** to `shine-star-mk` under **Project Settings → General**.

---

© Mutsumi Kuragane · Kiryu, Gunma, Japan
Software Development · AI Coding Evaluation · Japanese Language Expertise
