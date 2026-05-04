<script lang="ts">
	import { askAssistant, compileLatex, type InvokeResponse } from '$lib/api';

	let query = $state('');
	let selectedFile = $state<File | null>(null);
	let isLoading = $state(false);
	let error = $state<string | null>(null);
	let result = $state<InvokeResponse | null>(null);
	
	let isCompiling = $state(false);
	let pdfUrl = $state<string | null>(null);

	async function handleSubmit() {
		if (!query || !selectedFile) {
			error = 'Please provide both a query and your resume file.';
			return;
		}

		isLoading = true;
		error = null;
		result = null;
		if (pdfUrl) {
			URL.revokeObjectURL(pdfUrl);
			pdfUrl = null;
		}

		try {
			let resume = await selectedFile.text();
			
			if (!resume.trim()) {
				error = 'The uploaded resume file is empty.';
				isLoading = false;
				return;
			}
			
			result = await askAssistant({ query, resume });
		} catch (err: any) {
			error = err.message || 'An unexpected error occurred.';
		} finally {
			isLoading = false;
		}
	}
	
	async function handleCompileLatex() {
		if (!result?.response) return;
		
		isCompiling = true;
		error = null;
		
		try {
			const pdfBlob = await compileLatex(result.response);
			if (pdfUrl) {
				URL.revokeObjectURL(pdfUrl);
			}
			pdfUrl = URL.createObjectURL(pdfBlob);
		} catch (err: any) {
			error = err.message || 'An unexpected error occurred during PDF compilation.';
		} finally {
			isCompiling = false;
		}
	}
	
	function handleFileChange(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			selectedFile = target.files[0];
		} else {
			selectedFile = null;
		}
	}
</script>

<div class="max-w-5xl mx-auto p-6 mt-10">
	<h1 class="text-3xl font-bold text-gray-900 mb-6">Resume Tailor</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- Input Form -->
		<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
			<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-4">
				<div>
					<label for="query" class="block text-sm font-medium text-gray-700 mb-1">
						What role are you targeting?
					</label>
					<input
						id="query"
						type="text"
						bind:value={query}
						placeholder="e.g. Senior Frontend Developer at TechCorp"
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div>
					<label for="resume" class="block text-sm font-medium text-gray-700 mb-1">
						Your Current Resume (.txt)
					</label>
					<div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
						<div class="space-y-1 text-center">
							<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
								<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<div class="flex text-sm text-gray-600">
								<label for="resume-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
									<span>Upload a file</span>
									<input id="resume-upload" name="resume-upload" type="file" accept=".txt" class="sr-only" onchange={handleFileChange}>
								</label>
								<p class="pl-1">or drag and drop</p>
							</div>
							<p class="text-xs text-gray-500">TXT up to 10MB</p>
						</div>
					</div>
					{#if selectedFile}
						<p class="mt-2 text-sm text-gray-600 font-medium">Selected file: {selectedFile.name}</p>
					{/if}
				</div>

				<button
					type="submit"
					disabled={isLoading}
					class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					{isLoading ? 'Tailoring...' : 'Tailor Resume'}
				</button>

				{#if error}
					<div class="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
						{error}
					</div>
				{/if}
			</form>
		</div>

		<!-- Results Output -->
		<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col h-[700px]">
			<h2 class="text-xl font-semibold text-gray-900 mb-4 flex-shrink-0">Output</h2>
			
			<div class="overflow-y-auto flex-grow flex flex-col">
				{#if isLoading}
					<div class="flex-grow flex flex-col items-center justify-center text-gray-500">
						<svg class="animate-spin h-8 w-8 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Processing your resume...
					</div>
				{:else if result}
					<div class="prose prose-sm max-w-none">
						<div class="whitespace-pre-wrap text-gray-800 bg-gray-50 p-5 rounded-lg border border-gray-100 mb-6 font-mono text-sm max-h-64 overflow-y-auto">
							{result.response}
						</div>
						
						<div class="mb-6 mb-6 pb-6 border-b border-gray-100">
							<button 
								type="button" 
								onclick={handleCompileLatex} 
								disabled={isCompiling}
								class="bg-green-600 text-white py-2 px-4 rounded font-medium hover:bg-green-700 disabled:opacity-50"
							>
								{isCompiling ? 'Compiling PDF...' : 'Preview as PDF'}
							</button>
						</div>

						{#if pdfUrl}
							<div class="mb-6 h-[500px] border border-gray-300 rounded-lg overflow-hidden">
								<iframe src={pdfUrl} class="w-full h-full" title="PDF Preview"></iframe>
							</div>
						{/if}

						{#if result.retrieved.length > 0}
							<div>
								<h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Context References</h3>
								<ul class="space-y-3 m-0 p-0 list-none">
									{#each result.retrieved as doc}
										<li class="p-3 bg-white border border-gray-200 rounded-md">
											<p class="font-mono text-[10px] text-gray-400 mb-2">Score: {doc.score.toFixed(4)}</p>
											<p class="text-xs text-gray-600 m-0 line-clamp-3">{doc.content}</p>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				{:else}
					<div class="flex-grow flex flex-col items-center justify-center text-gray-400 text-center">
						<svg class="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
						</svg>
						<p>Your tailored resume will appear here.</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>