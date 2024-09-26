// languageSwitch.js
import { en1, es1, en2, es2 } from './languageData.js';

const languages = {
  en: { index: en1, gospel: en2 },
  es: { index: es1, gospel: es2 }
};

const getCurrentPage = () => {
  const path = window.location.pathname;
  if (path.includes('gospel.html')) return 'gospel';
  return 'index';
};

const setLanguage = (lang) => {
  const page = getCurrentPage();
  const content = languages[lang][page];
  
  if (content) {
    // Interpolation of the language data into the page's content
    document.querySelector('index-content')?.updateContent(content);
    document.querySelector('gospel-content')?.updateContent(content);
  }
};

const applyLanguageFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'en';  // default to English
  setLanguage(lang);
};

const persistLanguage = (lang) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.pushState({}, '', url);
  setLanguage(lang);
};

// Event listeners for language buttons
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('Spanish')?.addEventListener('click', () => persistLanguage('es'));
  document.getElementById('English')?.addEventListener('click', () => persistLanguage('en'));
  document.getElementById('close')?.addEventListener('click', () => hideDiv());
  applyLanguageFromUrl();
});

const hideDiv = () => {
  document.getElementById("btnsDiv")?.classList.add('hidden');
  document.getElementById('close')?.classList.add('hidden');
}