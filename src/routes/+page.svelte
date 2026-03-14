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
		<section class="relative w-full overflow-hidden" style="min-height: 480px;">
			<!-- Blurred background -->
			<div class="absolute inset-0">
				<img
					src={featuredAnime.images.jpg.large_image_url}
					alt=""
					class="w-full h-full object-cover scale-110 blur-md brightness-50"
					aria-hidden="true"
				/>
			</div>
			<!-- Gradient overlays -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/70 to-transparent"
			></div>
			<div class="absolute inset-0 bg-gradient-to-t from-[#222] via-transparent to-transparent"></div>

			<!-- Hero content -->
			<div
				class="relative flex items-center px-6 sm:px-10 md:px-16 lg:px-32 py-16 min-h-[480px]"
			>
				<div class="flex flex-row items-center w-full gap-10">
					<!-- Text content -->
					<div class="flex-1 max-w-xl">
						<span
							class="text-[#ff3e00] text-xs font-overpass font-semibold uppercase tracking-widest mb-3 block"
						>
							Featured This Season
						</span>
						<h2
							class="text-3xl sm:text-4xl md:text-5xl font-black text-white font-overpass leading-tight mb-4 line-clamp-2"
						>
							{featuredAnime.title}
						</h2>

						{#if featuredAnime.score}
							<div class="flex items-center gap-3 mb-4">
								<span
									class="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded font-overpass"
								>
									★ {featuredAnime.score}
								</span>
								{#if featuredAnime.scored_by}
									<span class="text-gray-400 text-sm font-overpass">
										{NumberFormatter.formatWithCommas(featuredAnime.scored_by)} ratings
									</span>
								{/if}
							</div>
						{/if}

						{#if featuredAnime.synopsis}
							<p
								class="text-gray-300 font-overpass font-light text-sm md:text-base leading-relaxed mb-6 line-clamp-3"
							>
								{featuredAnime.synopsis}
							</p>
						{/if}

						<a
							href="/anime/{featuredAnime.mal_id}"
							class="inline-flex items-center gap-2 bg-[#ff3e00] hover:bg-[#cc3200] text-white font-overpass font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#ff3e00]/30"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-4 h-4"
								aria-hidden="true"
							>
								<path d="M8 5.14v14l11-7-11-7z" />
							</svg>
							View Details
						</a>
					</div>

					<!-- Cover art (desktop only) -->
					<div class="hidden md:block flex-shrink-0">
						<img
							src={featuredAnime.images.jpg.large_image_url}
							alt={featuredAnime.title}
							class="w-48 lg:w-56 rounded-xl shadow-2xl shadow-black/60 ring-2 ring-white/10"
						/>
					</div>
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
