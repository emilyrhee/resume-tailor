import { F as escape_html, P as attr } from "../../chunks/dev.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let query = "";
		let isLoading = false;
		$$renderer.push(`<div class="max-w-5xl mx-auto p-6 mt-10"><h1 class="text-3xl font-bold text-gray-900 mb-6">Resume Tailor</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200"><form class="space-y-4"><div><label for="query" class="block text-sm font-medium text-gray-700 mb-1">What role are you targeting?</label> <input id="query" type="text"${attr("value", query)} placeholder="e.g. Senior Frontend Developer at TechCorp" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/></div> <div><label for="resume" class="block text-sm font-medium text-gray-700 mb-1">Your Current Resume (.txt)</label> <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"><div class="space-y-1 text-center"><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> <div class="flex text-sm text-gray-600"><label for="resume-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"><span>Upload a file</span> <input id="resume-upload" name="resume-upload" type="file" accept=".txt" class="sr-only"/></label> <p class="pl-1">or drag and drop</p></div> <p class="text-xs text-gray-500">TXT up to 10MB</p></div></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <button type="submit"${attr("disabled", isLoading, true)} class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">${escape_html("Tailor Resume")}</button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></form></div> <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col h-[700px]"><h2 class="text-xl font-semibold text-gray-900 mb-4 flex-shrink-0">Output</h2> <div class="overflow-y-auto flex-grow flex flex-col">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<div class="flex-grow flex flex-col items-center justify-center text-gray-400 text-center"><svg class="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> <p>Your tailored resume will appear here.</p></div>`);
		$$renderer.push(`<!--]--></div></div></div></div>`);
	});
}
//#endregion
export { _page as default };
