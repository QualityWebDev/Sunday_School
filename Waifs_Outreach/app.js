// app.js
import { initializePageContent } from './pageLogic.js';

class PageContent extends HTMLElement {
    constructor() {
        super();
        this.lang = 'en';  // Set the default language
    }

    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || localStorage.getItem('preferredLanguage') || 'en'; // Use stored or default lang

    // Initialize all logic for the page
    initializePageContent(this, lang); // Pass the language variable
    }

    render(languageObject) {
        this.innerHTML = `
            <header class="shadow-md shadow-slate-700 w-screen py-2 bg-slate-800 flex justify-center items-center content-center">
                <nav class="w-fit flex justify-around items-center content-center">
                <p class="hover:bg-slate-700 px-2 py-1 rounded-sm text-slate-400 border-r border-solid border-slate-300/50">
                    <a href="/good-news/gospel.html?lang=${this.lang}">${languageObject.header.linkOne}</a>
                </p>
                <p class="hover:bg-slate-700 px-2 py-1 rounded-sm text-slate-400 border-l border-solid border-slate-300/50">
                    <a href="/index.html">${languageObject.header.linkTwo}</a>
                </p>
            </nav>
            </header>
            <main class="w-screen m-0 py-6 flex items-center justify-center">
                <div class="w-9/12">
                    <h1 class="text-center font-bold h-5 text-2xl text-slate-900 py-2">${languageObject.main.title}</h1>
                    <form action="https://getform.io/f/bejyndga" method="POST" class="grid justify-center p-8 gap-4">
                        <div class="grid justify-center items-center content-center">
                            <input class="mb-4 px-2 rounded-sm bg-slate-100 sm:w-60 md:w-80 w-52 text-sm py-1" type="text" name="Parent_Name" placeholder="${languageObject.main.fields.parentName}">
                            <input class="mb-4 px-2 rounded-sm bg-slate-100 w-52 sm:w-60 md:w-80 text-sm py-1 sm:text-md" type="text" name="Child's Name'" placeholder="${languageObject.main.fields.childName}">
                            <p class="text-xs pb-4 -mt-3 text-slate-900 w-52 sm:w-60 md:w-80">${languageObject.main.explain}</p>
                            <input class="mb-4 px-2 rounded-sm bg-slate-100 text-sm py-1" type="number" name="Phone_Number" placeholder="${languageObject.main.fields.phoneNumber}">
                            <input class="px-2 rounded-sm bg-slate-100 text-sm py-1" type="text" name="Address" placeholder="${languageObject.main.fields.address}">
                        </div>
                        <textarea class="px-2 rounded-sm bg-slate-100 text-sm py-1" name="Additional_Info" placeholder="${languageObject.main.fields.extraInfo}" rows="6" cols="20"></textarea>
                        <button type="submit" class="bg-slate-900 py-2 text-slate-50 rounded-3xl hover:bg-slate-800 active:bg-slate-950">${languageObject.main.submit}</button>
                    </form>
                    <p class="text-center py-4 -mt-8 italic text-sm">${languageObject.main.alt}</p>
                </div>
            </main>
        `;
    }
}

customElements.define('page-content', PageContent);
