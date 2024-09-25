import { en, es } from '/good-news/languages.js';

export let lang = 'en';

function getLanguageFromURL() {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        return storedLang;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return langParam === 'es' ? 'es' : 'en'; 
}

export function switchLanguage(element, newLang) {
    lang = newLang;

    localStorage.setItem('preferredLanguage', lang);

    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);

    if (lang === 'es') {
        element.render(es);
    } else {
        element.render(en);
    }
}

export function attachLanguageListeners(element) {
    const yesBtn = document.querySelector('#yes');
    const noBtn = document.querySelector('#no');
    const questionBox = document.querySelector('#question-box');

    if (yesBtn && noBtn && questionBox) {
        yesBtn.addEventListener('click', () => {
            questionBox.classList.add("hidden");
            localStorage.setItem('preferredLanguage', 'es');
            localStorage.setItem('languageSelected', 'true');
            switchLanguage(element, 'es');
        });
        noBtn.addEventListener('click', () => {
            questionBox.classList.add("hidden");
            localStorage.setItem('preferredLanguage', 'en');
            localStorage.setItem('languageSelected', 'true');
            switchLanguage(element, 'en');
        });
    }
}

export function initializePageContent(element) {
    lang = getLanguageFromURL();
    element.lang = lang;

    const languageSelected = localStorage.getItem('languageSelected');
    if (languageSelected) {
        const questionBox = document.querySelector('#question-box');
        if (questionBox) {
            questionBox.classList.add("hidden");
        }
    }

    switchLanguage(element, lang);

    document.addEventListener('DOMContentLoaded', () => {
        attachLanguageListeners(element);
    });
}
