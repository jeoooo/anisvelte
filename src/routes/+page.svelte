<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { NumberFormatter } from '$lib/utils/NumberFormatter';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Pick the highest-scored seasonal anime as the hero
	let featuredAnime = $derived(
		data.seasonal_anime.length > 0
			? data.seasonal_anime.reduce(
					(best, current) => ((current.score ?? 0) > (best.score ?? 0) ? current : best),
					data.seasonal_anime[0]
				)
			: null
	);
</script>

<svelte:head>
	<title>AniSvelte</title>
</svelte:head>

<div class="flex flex-col bg-[#222] w-full min-h-screen">
	<!-- Hero Section -->
	{#if featuredAnime}
		<section class="relative w-full overflow-hidden border-b border-white/5" style="min-height: 560px;">

			<!-- Mobile: cinematic image banner at top -->
			<div class="relative w-full h-56 sm:h-72 md:hidden overflow-hidden">
				<img
					src={featuredAnime.images.jpg.large_image_url}
					alt=""
					class="w-full h-full object-cover object-top"
					aria-hidden="true"
				/>
				<!-- Bottom fade into page bg -->
				<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#222]/40 to-[#222]"></div>
				<!-- Side vignettes -->
				<div class="absolute inset-0 bg-gradient-to-r from-[#222]/60 via-transparent to-[#222]/60"></div>
			</div>

			<!-- Desktop: cinematic image fixed to right half, bleeds to edge -->
			<div class="hidden md:block absolute right-0 top-0 h-full w-[55%]">
				<img
					src={featuredAnime.images.jpg.large_image_url}
					alt=""
					class="w-full h-full object-cover object-top"
					aria-hidden="true"
				/>
				<!-- Left edge blend into dark bg -->
				<div class="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#222] to-transparent"></div>
				<!-- Top/bottom vignette -->
				<div class="absolute inset-0 bg-gradient-to-b from-[#222]/30 via-transparent to-[#222]/50"></div>
			</div>

			<!-- Text content: left side -->
			<div class="relative z-10 flex items-center px-6 sm:px-10 md:px-16 lg:px-32 py-10 md:py-0 md:min-h-[560px] md:w-[52%]">
				<div class="hero-content w-full">
					<span class="hero-badge text-[#ff3e00] text-xs font-overpass font-semibold uppercase tracking-widest mb-4 block">
						Featured This Season
					</span>

					<h2 class="hero-title text-3xl sm:text-4xl md:text-5xl font-black text-white font-overpass leading-tight mb-4 line-clamp-2">
						{featuredAnime.title}
					</h2>

					{#if featuredAnime.score}
						<div class="hero-score flex items-center gap-3 mb-4">
							<span class="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded font-overpass">
								★ {featuredAnime.score}
							</span>
							{#if featuredAnime.scored_by}
								<span class="text-gray-500 text-sm font-overpass">
									{NumberFormatter.formatWithCommas(featuredAnime.scored_by)} ratings
								</span>
							{/if}
						</div>
					{/if}

					{#if featuredAnime.genres?.length}
						<div class="flex flex-wrap gap-2 mb-5">
							{#each featuredAnime.genres.slice(0, 4) as genre}
								<span class="text-xs font-overpass font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
									{genre.name}
								</span>
							{/each}
						</div>
					{/if}

					{#if featuredAnime.synopsis}
						<p class="hero-synopsis text-gray-400 font-overpass font-light text-sm leading-relaxed mb-8 line-clamp-4">
							{featuredAnime.synopsis}
						</p>
					{/if}

					<a
						href="/anime/{featuredAnime.mal_id}"
						class="hero-cta inline-flex items-center gap-2 bg-[#ff3e00] text-white font-overpass font-semibold text-sm px-6 py-3 rounded-full"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
							<path d="M8 5.14v14l11-7-11-7z" />
						</svg>
						View Details
					</a>
				</div>
			</div>

		</section>
	{/if}

	<!-- Grid Sections -->
	<div class="flex flex-col w-full px-4 sm:px-8 md:px-16 lg:px-32">
		<h1 class="text-3xl md:text-4xl lg:text-5xl text-white font-black my-8 font-overpass">
			Seasonal Anime
		</h1>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full h-auto gap-4 mb-20"
		>
			{#each data.seasonal_anime as anime}
				<a href="/anime/{anime.mal_id}">
					<ItemCard
						image_url={anime.images.jpg.large_image_url}
						score={anime.score}
						scored_by={anime.scored_by}
						title={anime.title}
					/>
				</a>
			{/each}
		</div>

		<h1 class="text-3xl md:text-4xl lg:text-5xl text-white font-black my-8 font-overpass">
			Upcoming Anime
		</h1>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full h-auto gap-4 mb-20"
		>
			{#each data.upcoming_anime as anime}
				<a href="/anime/{anime.mal_id}">
					<ItemCard
						image_url={anime.images.jpg.large_image_url}
						score={anime.score}
						scored_by={anime.scored_by}
						title={anime.title}
						type="upcoming"
					/>
				</a>
			{/each}
		</div>
	</div>
</div>
