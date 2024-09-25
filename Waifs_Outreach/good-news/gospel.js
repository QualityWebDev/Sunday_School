import { initializePageContent } from '/good-news/pageLogic.js';

class PageContent extends HTMLElement {
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
                        <a href="/index.html?lang=${this.lang}">${languageObject.header.linkTwo}</a>
                    </p>
                </nav>
            </header>
            <main class="w-screen m-0 py-6 flex items-center justify-center">
                <div class="w-9/12">
                    <img src="/good-news/cover.jpg" alt="Cross on a rugged hill." class="mb-5 rounded-sm">
                    <h1 class="text-4xl font-bold text-center text-blue-950">${languageObject.title}</h1>
                    <article>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.one}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.two}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.three}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.four}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.five}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.six}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.seven}</p>
                        <p class="text-justify text-slate-900 my-2">${languageObject.paragraphs.eight}</p>
                    </article>
                    <p class="text-justify text-slate-900 my-2">
                        ${languageObject.paragraphs.nine} 
                        <a class="text-blue-800" href="${languageObject.videoLink}">${languageObject.videoText}</a>.
                    </p>
                </div>
            </main>
        `;
    }
}

customElements.define('page-content', PageContent);
