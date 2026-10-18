/**
 * i18n.js — Moteur de traduction.
 * Marque un élément avec data-i18n="section.cle" pour son texte,
 * data-i18n-attr="placeholder:section.cle|aria-label:section.autre" pour des attributs.
 */

const I18N_STORAGE_KEY = 'portfolio-lang';

function getStoredLang() {
  const stored = localStorage.getItem(I18N_STORAGE_KEY);
  if (stored === 'fr' || stored === 'en') return stored;
  return 'fr'; // français = langue par défaut du site
}

let currentLang = getStoredLang();

function getCurrentLang() {
  return currentLang;
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = tGet(dict, key);
    if (value !== null && typeof value === 'string') {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const pairs = el.getAttribute('data-i18n-attr').split('|');
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(':');
      const value = tGet(dict, key);
      if (attr && value !== null && typeof value === 'string') {
        el.setAttribute(attr, value);
      }
    });
  });

  const metaTitleKey = document.documentElement.getAttribute('data-title-key');
  if (metaTitleKey) {
    const title = tGet(dict, metaTitleKey);
    if (title) document.title = title;
  }
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    const desc = tGet(dict, 'meta.description');
    if (desc) metaDescEl.setAttribute('content', desc);
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && metaTitleKey) {
    const title = tGet(dict, metaTitleKey);
    if (title) ogTitle.setAttribute('content', title);
  }
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    const desc = tGet(dict, 'meta.description');
    if (desc) ogDesc.setAttribute('content', desc);
  }
}

function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  applyTranslations(lang);
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initI18n() {
  document.documentElement.setAttribute('lang', currentLang);
  applyTranslations(currentLang);
}

// Applique la langue mémorisée dès que le DOM est prêt.
document.addEventListener('DOMContentLoaded', initI18n);
