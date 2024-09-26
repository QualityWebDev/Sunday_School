class GospelContent extends HTMLElement {
    connectedCallback() {
        this.updateContent();  // Initialize with default content
    }

    updateContent(content = {}) {
        const { header = {}, main = {} } = content;

        const htmlContent = `
        <header class="shadow-md shadow-slate-700 w-screen py-2 bg-slate-800 flex justify-center items-center content-center mb-8">
          <nav class="w-fit flex justify-around items-center content-center">
            <p class="hover:bg-slate-700 px-2 py-1 rounded-sm text-slate-400 border-r border-solid border-slate-300/50"><a href="/good-news/gospel.html${window.location.search}">${header.linkOne || 'Good News'}</a></p>
            <p class="hover:bg-slate-700 px-2 py-1 rounded-sm text-slate-400 border-l border-solid border-slate-300/50"><a href="/index.html${window.location.search}">${header.linkTwo || 'Sign Up'}</a></p>
          </nav>
        </header>
        <main class="w-screen pb-6 pt-11  flex items-center justify-center">
            <div class="w-9/12 mt-6">
                <img src="/good-news/cover.jpg" alt="Cross on a rugged hill." class="mb-5 rounded-sm">
                <h1 class="text-4xl font-bold text-center text-blue-950">${main.title}</h1>
                <article>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pOne}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pTwo}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pThree}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pFour}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pFive}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pSix}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pSeven}</p>
                    <p class="text-justify text-slate-900 my-2">${main.paragraphs.pEight}</p>
                </article>
                <p class="text-justify text-slate-900 my-2">${main.video.preAnchor} <a class="text-blue-800" href="${main.video.link}">${main.video.anchor}</a>${main.video.postAnchor}</p>
            </div>
        </main>
        `;
        this.innerHTML = htmlContent;
    }
}

customElements.define("gospel-content", GospelContent);
