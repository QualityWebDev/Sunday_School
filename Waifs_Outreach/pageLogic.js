//pageLogic.js
import { en, es } from './languages.js';

export let lang = 'en';

function getLanguageFromURL() {
    // Check localStorage for a preferred language
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        return storedLang;
    }

    // Fallback to checking the URL or defaulting to 'en'
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return langParam === 'es' ? 'es' : 'en'; 
}


export function switchLanguage(element, newLang) {
    lang = newLang;

    // Store the language preference in localStorage
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
            // Hide the language selection box
            questionBox.classList.add("hidden");

            // Store language selection and hide question box flag in localStorage
            localStorage.setItem('preferredLanguage', 'es');
            localStorage.setItem('languageSelected', 'true'); // Flag that language was selected

            switchLanguage(element, 'es');
        });

        noBtn.addEventListener('click', () => {
            // Hide the language selection box
            questionBox.classList.add("hidden");

            // Store language selection and hide question box flag in localStorage
            localStorage.setItem('preferredLanguage', 'en');
            localStorage.setItem('languageSelected', 'true'); // Flag that language was selected

            switchLanguage(element, 'en');
        });
    }
}


export function initializePageContent(element) {
    lang = getLanguageFromURL();
    element.lang = lang;

    // Get the languageSelected flag from localStorage
    const languageSelected = localStorage.getItem('languageSelected');

    // If language is already selected, hide the question box
    if (languageSelected) {
        const questionBox = document.querySelector('#question-box');
        if (questionBox) {
            questionBox.classList.add("hidden");
        }
    }

    // Set the initial language
    switchLanguage(element, lang);

    document.addEventListener('DOMContentLoaded', () => {
        attachLanguageListeners(element);
    });
}



