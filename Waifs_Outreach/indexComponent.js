class IndexContent extends HTMLElement {
  connectedCallback() {
      this.updateContent();  // Initialize with default content
  }

  updateContent(content = {}) {
      const { header = {}, main = {} } = content;

      const htmlContent = `
      <header class="shadow-md shadow-slate-700 w-screen py-2 bg-slate-800 flex justify-center items-center content-center">
        <nav class="w-fit flex justify-around items-center content-center">
          <p class="hover:bg-slate-700 px-2 py-1 rounded-sm text-slate-400 border-r border-solid border-slate-300/50"><a href="/good-news/gospel.html${window.location.search}">${header.linkOne || 'Good News'}</a></p>
          <p class="hover:bg-slate-700 px-2 py-1 rounded-sm text-slate-400 border-l border-solid border-slate-300/50"><a href="/index.html${window.location.search}">${header.linkTwo || 'Sign Up'}</a></p>
        </nav>
      </header>
      <main class="w-screen m-0 py-6 flex items-center justify-center">
        <div class="w-9/12">
          <h1 class="text-center font-bold h-5 text-2xl text-slate-900 py-2">${main.title || 'Contact Us'}</h1>
          <form action="https://getform.io/f/bejyndga" method="POST" class="grid justify-center p-8 gap-4">
            <div class="grid justify-center items-center content-center">
              <input class="mb-4 px-2 rounded-sm bg-slate-100 sm:w-60 md:w-80 w-52 text-sm py-1" type="text" name="Parent_Name" placeholder="${main.fields?.parentName || 'Parent Name'}">
              <input class="mb-4 px-2 rounded-sm bg-slate-100 w-52 sm:w-60 md:w-80  text-sm py-1" type="text" name="Child's Name'" placeholder="${main.fields?.childName || 'Child/Children\'s First Name(s)'}">
              <p class="text-xs pb-4 -mt-3 text-slate-900 w-52 sm:w-60 md:w-80">${main.fields?.fieldComment?.comment || '(if you have more than one child, separate their names with commas.)'}</p>
              <input class="mb-4 px-2 rounded-sm bg-slate-100  text-sm py-1" type="number" name="Phone_Number" placeholder="${main.fields?.phoneNumber || 'Phone Number'}">
              <input class="px-2 rounded-sm bg-slate-100  text-sm py-1" type="text" name="Address" placeholder="${main.fields?.address || 'Address'}">
            </div>
            <textarea class="px-2 rounded-sm bg-slate-100  text-sm py-1" name="Additional_Info" placeholder="${main.fields?.additInfo || 'If you need to give us additional information, feel free!'}" rows="6" cols="20"></textarea>
            <button type="submit" class="bg-slate-900 py-2 text-slate-50 rounded-3xl hover:bg-slate-800 active:bg-slate-950">${main.button || 'Send'}</button>
          </form>
          <p class="text-center py-4 -mt-8 italic text-sm">${main.alt || '(Or text us at (210) 549-6522)'}</p>
        </div>
      </main>
      `;
      this.innerHTML = htmlContent;
  }
}

customElements.define("index-content", IndexContent);
