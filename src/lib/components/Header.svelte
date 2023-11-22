<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let query = '';
	let suggestions = [];

	const RATE_LIMIT = 333; // 3 requests per second
	let lastSearchTime = 0;
	const requestQueue = [];

	async function handleSearch() {
		try {
			const currentTime = Date.now();
			const timeSinceLastSearch = currentTime - lastSearchTime;

			if (timeSinceLastSearch < RATE_LIMIT) {
				requestQueue.push(query);
			} else {
				await makeAPICall(query);
			}
		} catch (error) {
			console.error('Error fetching search suggestions:', error);
		}
	}

	async function makeAPICall(query) {
		try {
			const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
			const data = await response.json();

			if (data.data) {
				suggestions = data.data
					.map((item) => ({
						mal_id: item.mal_id,
						title: item.title,
						imageUrl: item.images.jpg.small_image_url,
						type: item.type
					}))
					.slice(0, 10);
			} else {
				console.error('Invalid API response format:', data);
			}

			lastSearchTime = Date.now();

			if (requestQueue.length > 0) {
				const nextQuery = requestQueue.shift();
				await makeAPICall(nextQuery);
			}
		} catch (error) {
			console.error('Error fetching search suggestions:', error);
		}
	}

	function clearSuggestions() {
		suggestions = [];
	}

	function handleSuggestionClick(mal_id) {
		console.log('Navigate to:', mal_id);
		goto(`/anime/${mal_id}`);
	}

	onMount(() => {
		window.addEventListener('click', handleWindowClick);

		return () => {
			window.removeEventListener('click', handleWindowClick);
		};
	});

	function handleWindowClick(event) {
		const isSuggestion = event.target.closest('.suggestion-item');
		if (!isSuggestion) {
			clearSuggestions();
		}
	}
</script>

<nav class="bg-[#2e2e2e] border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center justify-between">
			<span
				class="inline-flex self-center text-2xl whitespace-nowrap font-overpass font-light text-white"
			>
				<svg viewBox="0 0 128 128" class="w-7 mr-1">
					<path
						fill="#ff3e00"
						d="M110.293 16.914C98.586-.086 75.668-5 58.02 5.707l-29.856 18.98a33.94 33.94 0 00-15.418 22.938 35.543 35.543 0 003.566 23.102 33.01 33.01 0 00-5.066 12.793 36.517 36.517 0 006.191 27.52c11.727 16.96 34.583 21.897 52.27 11.312l29.879-19a34.025 34.025 0 0015.355-22.938 35.44 35.44 0 00-3.586-23.02c7.938-12.456 7.52-28.48-1.062-40.48zm-55.254 95.773a23.645 23.645 0 01-25.394-9.433c-3.461-4.793-4.73-10.711-3.73-16.586l.585-2.832.54-1.75 1.605 1.062c3.52 2.668 7.46 4.582 11.668 5.875l1.082.375-.122 1.067c-.105 1.48.332 3.144 1.188 4.414 1.75 2.52 4.793 3.73 7.727 2.937.644-.207 1.273-.418 1.812-.754l29.754-18.976c1.5-.961 2.457-2.398 2.832-4.106.328-1.773-.106-3.585-1.066-5.02-1.774-2.46-4.793-3.565-7.727-2.831-.645.226-1.332.48-1.879.812l-11.25 7.145c-10.644 6.328-24.394 3.355-31.46-6.832a21.854 21.854 0 01-3.75-16.586 20.643 20.643 0 019.456-13.875l29.692-18.98c1.875-1.168 3.894-2.02 6.082-2.668 9.605-2.5 19.726 1.27 25.394 9.394a22.027 22.027 0 013.043 19.398l-.543 1.77-1.539-1.062a39.399 39.399 0 00-11.727-5.875l-1.066-.313.106-1.066c.105-1.563-.332-3.207-1.188-4.48-1.754-2.52-4.793-3.583-7.727-2.833-.644.211-1.273.418-1.812.754L45.812 49.977c-1.5 1-2.46 2.394-2.773 4.144-.312 1.707.106 3.582 1.066 4.957 1.708 2.524 4.81 3.586 7.688 2.832.687-.207 1.332-.414 1.855-.75l11.375-7.254c1.856-1.226 3.938-2.12 6.067-2.707 9.668-2.52 19.75 1.274 25.394 9.438 3.461 4.793 4.793 10.707 3.832 16.52a20.487 20.487 0 01-9.332 13.874L61.23 109.97a25.82 25.82 0 01-6.187 2.707zm0 0"
					/>
				</svg>
				AniSvelte</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
			>
				<li>
					<a
						href="/"
						class="block py-2 pl-3 pr-4 font-overpass font-light text-white rounded hover:underline hover:underline-offset-2 hover:text-[#ff3e00] md:hover:bg-transparent md:border-0 md:p-0"
						aria-current="page">Anime</a
					>
				</li>
				<li>
					<a
						href="/topAnime"
						class="block py-2 pl-3 pr-4 font-overpass font-light text-white rounded hover:underline hover:underline-offset-2 hover:text-[#ff3e00] md:hover:bg-transparent md:border-0 md:p-0"
						aria-current="page">Manga</a
					>
				</li>
				<li>
					<a
						href="/topAnime"
						class="block py-2 pl-3 pr-4 font-overpass font-light text-white rounded hover:underline hover:underline-offset-2 hover:text-[#ff3e00] md:hover:bg-transparent md:border-0 md:p-0"
						aria-current="page">Top Anime</a
					>
				</li>
				<li>
					<a
						href="/topManga"
						class="block py-2 pl-3 pr-4 font-overpass font-light text-white rounded hover:underline hover:underline-offset-2 hover:text-[#ff3e00] md:hover:bg-transparent md:border-0 md:p-0"
						>Top Manga</a
					>
				</li>

				<li>
					<a
						href="/about"
						class="block py-2 pl-3 pr-4 font-overpass font-light text-white rounded hover:underline hover:underline-offset-2 hover:text-[#ff3e00] md:hover:bg-transparent md:border-0 md:p-0"
						>About</a
					>
				</li>
				<li>
					<div class="relative">
						<input
							type="text"
							placeholder="Search..."
							class="text-sm rounded-full bg-[#383838] h-[30px] px-[32px] w-[250px] border-none focus:ring-2 focus:ring-[#ff3e00] caret-[#ff3e00] text-white font-overpass font-light relative"
							bind:value={query}
							on:input={handleSearch}
							on:focus={handleSearch}
						/>
						<i
							class="fa-solid fa-magnifying-glass absolute text-sm left-3 top-[14px] transform -translate-y-1/2 text-white"
						/>

						{#if suggestions.length > 0}
							<ul
								class="absolute left-0 mt-2 bg-[#2e2e2e] border border-gray-500 rounded-lg shadow-md z-10"
							>
								{#each suggestions as { mal_id, title, imageUrl, type }, index}
									{#if index >= 5 && index < 10}
										<!-- Limit the suggestions to be between 5 and 10 -->
										<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
										<!-- svelte-ignore a11y-click-events-have-key-events -->

										<li
											on:click={() => handleSuggestionClick(mal_id)}
											class="flex items-center px-4 py-2 cursor-pointer hover:bg-[#222222] w-[350px] rounded-lg"
										>
											<img
												src={imageUrl}
												alt={title}
												class="w-10 h-10 object-cover mr-2 rounded-md"
											/>
											<div class="flex flex-col">
												<span class="font-overpass text-sm font-bold text-white">{title}</span>
												<span class="font-overpass text-xs font-normal text-white"
													>{`Type: ${type}`}</span
												>
											</div>
										</li>
									{/if}
								{/each}
							</ul>
						{/if}
					</div>
				</li>
			</ul>
		</div>
	</div>
</nav>
