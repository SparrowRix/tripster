# Tripster

A travel agency landing page for **Tripster** — bespoke travel experiences for the curious soul.

## Stack

- **HTML5** — semantic markup
- **Tailwind CSS** (CDN) — utility-first styling with custom theme
- **Vanilla JS** — scroll behaviour, mobile menu, fade animations, form handling
- **Lucide Icons** (CDN) — icon set
- **Google Fonts** — Montserrat

## i18n

Three languages supported: English (EN), Russian (RU), Uzbek (UZ).
Selected language is persisted in `localStorage`.

## How to Run

Open `index.html` directly in a browser, or use a local dev server:

```bash
# VS Code — install Live Server extension, then click "Go Live"
# Or with npx:
npx serve .
```

## File Structure

```
/tripster
  index.html          ← HTML structure
  README.md
  /assets
    logo-2.png
  /css
    styles.css        ← extracted custom CSS
  /js
    main.js           ← scroll, hamburger, animations, form
    translations.js   ← i18n string maps (EN / RU / UZ)
    i18n.js           ← i18n engine
  /promp              ← prompt docs (do not modify)
```
