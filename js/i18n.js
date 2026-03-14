function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  localStorage.setItem('tripster-lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('tripster-lang') || 'uz';
  applyTranslations(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
