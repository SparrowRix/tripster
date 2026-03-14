# CLAUDE.md — Tripster

## Overview
Static travel-agency landing page. Single `index.html` with four sections: Hero, Tours, Benefits, Contact. No build step; open in browser.

## Stack
| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styles | Tailwind CSS CDN v3 + `css/styles.css` |
| Icons | Lucide Icons CDN |
| Font | Google Fonts — Montserrat (300–800) |
| JS | Vanilla ES6+ (no framework, no bundler) |
| i18n | Custom: `js/translations.js` + `js/i18n.js` |

## Structure
```
/tripster
  index.html          ← HTML skeleton, CDN links, section markup
  README.md
  /assets
    logo-2.png
  /css
    styles.css        ← custom CSS (animations, card, buttons, mobile menu)
  /js
    main.js           ← scroll, hamburger, IntersectionObserver, form
    translations.js   ← all UI strings (EN / RU / UZ)
    i18n.js           ← applyTranslations(), setLanguage(), localStorage
  /promp              ← prompt docs — do not modify
```

## Commands
No package.json. Run locally:
```bash
# Option 1 — VS Code Live Server extension → "Go Live"
# Option 2 — npx
npx serve .
```

## Conventions
- **Filenames**: kebab-case (`styles.css`, `main.js`, `logo-2.png`)
- **i18n keys**: camelCase in `translations.js` (`navTours`, `heroH1`, `submitBtn`)
- **HTML hooks**: `data-i18n="key"` for text, `data-i18n-placeholder="key"` for inputs, `data-lang="en|ru|uz"` on switcher buttons
- **CSS classes**: BEM-ish custom names (`dest-card`, `card-overlay`, `price-badge`, `card-content`, `btn-cyan`, `btn-learn-more`, `nav-link`, `lang-btn`, `fade-up`)
- **Tailwind**: utilities inline on HTML elements; custom theme colours in inline `tailwind.config` in `<head>`

## Styles
- **Custom CSS**: `css/styles.css` — animations, card layout, button variants, mobile menu transitions
- **Tailwind theme** (inline `<script>` in `<head>`):
  - Colors: `navy: #000D33`, `cyan: #00D4FF`
  - Font: `sans: ['Montserrat', 'sans-serif']`
- **Breakpoints**: Tailwind defaults — `sm` 640px, `md` 768px
- **Animations**: `.fade-up` + `.fade-up.visible` via IntersectionObserver; `.delay-100/200/300` stagger helpers

## Assets
- `assets/logo-2.png` — site logo (referenced in `index.html`)
- Icons — Lucide CDN (SVG, rendered via `lucide.createIcons()`)
- Font — Google Fonts CDN (Montserrat)

## Key Files
| File | When to edit |
|---|---|
| `index.html` | Add/remove sections, change nav links, update meta |
| `js/translations.js` | Change any visible text (all languages) |
| `css/styles.css` | Tweak animations, card styles, button hover states |
| `js/main.js` | Scroll behaviour, hamburger, fade logic, form handling |
