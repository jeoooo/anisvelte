<script lang="ts">
	import { DateFormatter } from '$lib/utils/DateFormatter.js';
	import { NumberFormatter } from '$lib/utils/NumberFormatter';
	import { StringFormatter } from '$lib/utils/StringFormatter.js';
	import Youtube from 'svelte-youtube-embed';
	import { onMount } from 'svelte';

	let { data } = $props();
	let anime = $derived(data.anime_data.data);
	let title = $derived(anime.titles[0]?.title ?? 'Unknown Title');
	let japaneseTitle = $derived(anime.titles.find((t: { type: string }) => t.type === 'Japanese')?.title ?? null);

	let infoRows = $derived([
		{ label: 'Type', value: anime.type ?? null },
		{ label: 'Episodes', value: anime.episodes ?? 'TBA' },
		{ label: 'Status', value: anime.status ?? null },
		{
			label: 'Aired',
			value: anime.aired?.from
				? `${DateFormatter.formatDate(anime.aired.from)} – ${DateFormatter.formatDate(anime.aired.to) ?? 'Present'}`
				: null
		},
		{
			label: 'Broadcast',
			value:
				anime.broadcast?.day && anime.broadcast?.time
					? `${anime.broadcast.day} at ${anime.broadcast.time} (${anime.broadcast.timezone})`
					: null
		},
		{ label: 'Studios', value: StringFormatter.formatItems(anime.studios ?? []) || null },
		{ label: 'Producers', value: StringFormatter.formatItems(anime.producers ?? []) || null },
		{ label: 'Licensors', value: StringFormatter.formatItems(anime.licensors ?? []) || null },
		{ label: 'Source', value: anime.source ?? null },
		{ label: 'Duration', value: anime.duration ?? null },
		{ label: 'Rating', value: anime.rating ?? null },
		{ label: 'Demographic', value: StringFormatter.formatItems(anime.demographics ?? []) || null }
	]);

	let contentVisible = $state(false);

	onMount(() => {
		setTimeout(() => {
			contentVisible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>{title} — AniSvelte</title>
</svelte:head>

<div class="bg-[#111] min-h-screen">
	<!-- Hero: cover image as background with gradient overlays -->
	<div
		class="relative w-full h-96 md:h-[36rem] overflow-hidden bg-cover bg-center bg-no-repeat"
		style="background-image: url('{anime.images.jpg.large_image_url ?? anime.images.jpg.image_url}');"
	>
		<!-- Gradient overlays for text readability -->
		<div class="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-[#111]/40"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-[#111]/90 via-[#111]/50 to-[#111]/40"></div>
		<!-- Bottom fade into page -->
		<div class="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
		<!-- Top fade for better text readability -->
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]"></div>

		<!-- Title + meta overlaid bottom-left with staggered animation -->
		<div class="absolute inset-0 flex items-end">
			<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 w-full">
				<div class="space-y-4" class:animate-fade-in-up-1={contentVisible}>
					<p class="text-[#ff3e00] text-xs font-overpass font-semibold uppercase tracking-[0.2em]">
						{anime.type ?? 'Anime'}{anime.episodes ? ` · ${anime.episodes} Episodes` : ''}
					</p>
					<h1
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-overpass leading-tight break-words max-w-2xl"
					>
						{title}
					</h1>
					{#if japaneseTitle}
						<p class="text-gray-400 text-base font-overpass font-light">{japaneseTitle}</p>
					{/if}
					<div class="flex flex-wrap gap-2 pt-2">
						{#each (anime.genres ?? []) as genre}
							<span
								class="bg-[#ff3e00]/20 border border-[#ff3e00]/40 text-[#ff3e00] text-sm font-overpass font-semibold px-3 py-1.5 rounded-full hover:bg-[#ff3e00]/30 transition-colors duration-300"
							>
								{genre.name}
							</span>
						{/each}
						{#each (anime.themes ?? []) as theme}
							<span
								class="bg-zinc-700/60 text-gray-300 text-sm font-overpass px-3 py-1.5 rounded-full hover:bg-zinc-700/80 transition-colors duration-300"
							>
								{theme.name}
							</span>
						{/each}
						{#each (anime.demographics ?? []) as demo}
							<span
								class="bg-zinc-600/50 text-gray-400 text-sm font-overpass px-3 py-1.5 rounded-full hover:bg-zinc-600/70 transition-colors duration-300"
							>
								{demo.name}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 mt-10">
		<!-- Stats bar with improved spacing and hover effects -->
		<div class="flex flex-wrap items-stretch gap-4" class:animate-fade-in-up-2={contentVisible}>
			<!-- Score -->
			<div class="bg-zinc-800/80 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3 hover:bg-zinc-800 transition-colors duration-300">
				<span class="text-yellow-400 text-3xl font-black font-overpass">
					★ {anime.score ?? 'N/A'}
				</span>
				{#if anime.scored_by}
					<span class="text-gray-500 text-sm font-overpass leading-tight">
						/ 10<br />{NumberFormatter.formatWithCommas(anime.scored_by)} ratings
					</span>
				{/if}
			</div>

			{#if anime.rank}
				<div class="bg-zinc-800/80 backdrop-blur-sm rounded-2xl px-5 py-4 flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors duration-300">
					<span class="text-white text-lg font-bold font-overpass"
						>#{NumberFormatter.formatWithCommas(anime.rank)}</span
					>
					<span class="text-gray-500 text-xs uppercase tracking-[0.15em] font-overpass">Ranked</span>
				</div>
			{/if}

			{#if anime.popularity}
				<div class="bg-zinc-800/80 backdrop-blur-sm rounded-2xl px-5 py-4 flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors duration-300">
					<span class="text-white text-lg font-bold font-overpass"
						>#{NumberFormatter.formatWithCommas(anime.popularity)}</span
					>
					<span class="text-gray-500 text-xs uppercase tracking-[0.15em] font-overpass"
						>Popularity</span
					>
				</div>
			{/if}

			{#if anime.members}
				<div class="bg-zinc-800/80 backdrop-blur-sm rounded-2xl px-5 py-4 flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors duration-300">
					<span class="text-white text-lg font-bold font-overpass"
						>{NumberFormatter.formatWithCommas(anime.members)}</span
					>
					<span class="text-gray-500 text-xs uppercase tracking-[0.15em] font-overpass"
						>Members</span
					>
				</div>
			{/if}

			{#if anime.favorites}
				<div class="bg-zinc-800/80 backdrop-blur-sm rounded-2xl px-5 py-4 flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors duration-300">
					<span class="text-white text-lg font-bold font-overpass"
						>{NumberFormatter.formatWithCommas(anime.favorites)}</span
					>
					<span class="text-gray-500 text-xs uppercase tracking-[0.15em] font-overpass"
						>Favorites</span
					>
				</div>
			{/if}
		</div>

		<!-- Two-column layout with improved spacing -->
		<div class="flex flex-col lg:flex-row gap-10 mt-12">
			<!-- Sidebar -->
			<aside class="lg:w-64 xl:w-72 shrink-0 space-y-6" class:animate-fade-in-up-3={contentVisible}>
				<!-- Information -->
				<div class="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 space-y-4">
					<h3
						class="text-xs uppercase tracking-[0.2em] text-gray-400 font-overpass font-semibold border-b border-zinc-700 pb-3"
					>
						Information
					</h3>
					{#each infoRows as row}
						{#if row.value}
							<div>
								<p
									class="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-overpass font-semibold"
								>
									{row.label}
								</p>
								<p class="text-base text-white font-overpass font-light leading-relaxed mt-1">
									{row.value}
								</p>
							</div>
						{/if}
					{/each}
				</div>

				<!-- Alternative Titles -->
				{#if anime.titles && anime.titles.length > 1}
					<div class="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 space-y-3">
						<h3
							class="text-xs uppercase tracking-[0.2em] text-gray-400 font-overpass font-semibold border-b border-zinc-700 pb-3"
						>
							Alternative Titles
						</h3>
						{#each anime.titles as t}
							<div>
								<p class="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-overpass">
									{t.type}
								</p>
								<p class="text-base text-white font-overpass font-light leading-relaxed">{t.title}</p>
							</div>
						{/each}
					</div>
				{/if}
			</aside>

			<!-- Main content with improved spacing -->
			<main class="flex-1 min-w-0 space-y-12" class:animate-fade-in-up-4={contentVisible}>
				<!-- Synopsis -->
				<section>
					<h2
						class="text-xl font-bold text-white font-overpass border-l-4 border-[#ff3e00] pl-4 mb-6"
					>
						Synopsis
					</h2>
					<p class="text-gray-300 font-overpass font-light text-base leading-[1.8]">
						{anime.synopsis ?? 'No synopsis available.'}
					</p>
				</section>

				<!-- Trailer -->
				{#if anime.trailer?.youtube_id}
					<section>
						<h2
							class="text-xl font-bold text-white font-overpass border-l-4 border-[#ff3e00] pl-4 mb-6"
						>
							Trailer
						</h2>
						<div class="rounded-2xl overflow-hidden shadow-2xl">
							<Youtube id={anime.trailer.youtube_id} />
						</div>
					</section>
				{/if}
			</main>
		</div>
	</div>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up-1 {
		opacity: 0;
		animation: fadeInUp 0.6s ease-out forwards;
		animation-delay: 0.1s;
	}

	.animate-fade-in-up-2 {
		opacity: 0;
		animation: fadeInUp 0.6s ease-out forwards;
		animation-delay: 0.2s;
	}

	.animate-fade-in-up-3 {
		opacity: 0;
		animation: fadeInUp 0.6s ease-out forwards;
		animation-delay: 0.3s;
	}

	.animate-fade-in-up-4 {
		opacity: 0;
		animation: fadeInUp 0.6s ease-out forwards;
		animation-delay: 0.4s;
	}

	@media (prefers-reduced-motion: reduce) {
		.animate-fade-in-up-1,
		.animate-fade-in-up-2,
		.animate-fade-in-up-3,
		.animate-fade-in-up-4 {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}
</style>
