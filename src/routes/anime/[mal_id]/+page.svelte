<script lang="ts">
	import { DateFormatter } from '$lib/utils/DateFormatter.js';
	import { NumberFormatter } from '$lib/utils/NumberFormatter';
	import { StringFormatter } from '$lib/utils/StringFormatter.js';
	import Youtube from 'svelte-youtube-embed';

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
</script>

<svelte:head>
	<title>{title} — AniSvelte</title>
</svelte:head>

<div class="bg-[#111] min-h-screen">
	<!-- Hero: cover art anchored right at natural proportions, fading into dark -->
	<div class="relative w-full h-80 md:h-[30rem] overflow-hidden bg-[#111]">
		<!-- Cover art: full height, auto width, anchored to right edge — no card container -->
		<img
			src={anime.images.jpg.large_image_url ?? anime.images.jpg.image_url}
			alt=""
			class="absolute right-0 top-0 h-full w-auto"
			aria-hidden="true"
		/>
		<!-- Left-to-right fade: dark left bleeds into cover art -->
		<div class="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
		<!-- Bottom fade into page -->
		<div class="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent"></div>

		<!-- Title + meta overlaid bottom-left -->
		<div class="absolute inset-0 flex items-end">
			<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
				<p class="text-[#ff3e00] text-xs font-overpass font-semibold uppercase tracking-widest">
					{anime.type ?? 'Anime'}{anime.episodes ? ` · ${anime.episodes} Episodes` : ''}
				</p>
				<h1
					class="text-2xl sm:text-3xl md:text-4xl font-black text-white font-overpass leading-tight mt-1 break-words max-w-xl"
				>
					{title}
				</h1>
				{#if japaneseTitle}
					<p class="text-gray-400 text-sm font-overpass mt-0.5">{japaneseTitle}</p>
				{/if}
				<div class="flex flex-wrap gap-1.5 mt-3">
					{#each (anime.genres ?? []) as genre}
						<span
							class="bg-[#ff3e00]/15 border border-[#ff3e00]/30 text-[#ff3e00] text-xs font-overpass font-semibold px-2.5 py-0.5 rounded-full"
						>
							{genre.name}
						</span>
					{/each}
					{#each (anime.themes ?? []) as theme}
						<span
							class="bg-zinc-700/80 text-gray-300 text-xs font-overpass px-2.5 py-0.5 rounded-full"
						>
							{theme.name}
						</span>
					{/each}
					{#each (anime.demographics ?? []) as demo}
						<span
							class="bg-zinc-600/60 text-gray-400 text-xs font-overpass px-2.5 py-0.5 rounded-full"
						>
							{demo.name}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-6">
		<!-- Stats bar -->
		<div class="flex flex-wrap items-stretch gap-3">
			<!-- Score -->
			<div class="bg-zinc-800 rounded-xl px-5 py-3 flex items-center gap-2">
				<span class="text-yellow-400 text-2xl font-black font-overpass">
					★ {anime.score ?? 'N/A'}
				</span>
				{#if anime.scored_by}
					<span class="text-gray-500 text-xs font-overpass leading-tight">
						/ 10<br />{NumberFormatter.formatWithCommas(anime.scored_by)} ratings
					</span>
				{/if}
			</div>

			{#if anime.rank}
				<div class="bg-zinc-800 rounded-xl px-4 py-3 flex flex-col items-center justify-center">
					<span class="text-white text-sm font-bold font-overpass"
						>#{NumberFormatter.formatWithCommas(anime.rank)}</span
					>
					<span class="text-gray-500 text-[10px] uppercase tracking-widest font-overpass">Ranked</span
					>
				</div>
			{/if}

			{#if anime.popularity}
				<div class="bg-zinc-800 rounded-xl px-4 py-3 flex flex-col items-center justify-center">
					<span class="text-white text-sm font-bold font-overpass"
						>#{NumberFormatter.formatWithCommas(anime.popularity)}</span
					>
					<span class="text-gray-500 text-[10px] uppercase tracking-widest font-overpass"
						>Popularity</span
					>
				</div>
			{/if}

			{#if anime.members}
				<div class="bg-zinc-800 rounded-xl px-4 py-3 flex flex-col items-center justify-center">
					<span class="text-white text-sm font-bold font-overpass"
						>{NumberFormatter.formatWithCommas(anime.members)}</span
					>
					<span class="text-gray-500 text-[10px] uppercase tracking-widest font-overpass"
						>Members</span
					>
				</div>
			{/if}

			{#if anime.favorites}
				<div class="bg-zinc-800 rounded-xl px-4 py-3 flex flex-col items-center justify-center">
					<span class="text-white text-sm font-bold font-overpass"
						>{NumberFormatter.formatWithCommas(anime.favorites)}</span
					>
					<span class="text-gray-500 text-[10px] uppercase tracking-widest font-overpass"
						>Favorites</span
					>
				</div>
			{/if}
		</div>

		<!-- Two-column layout -->
		<div class="flex flex-col md:flex-row gap-6 mt-8">
			<!-- Sidebar -->
			<aside class="md:w-52 lg:w-56 shrink-0 space-y-4">
				<!-- Information -->
				<div class="bg-zinc-800/60 rounded-xl p-4 space-y-3">
					<h3
						class="text-xs uppercase tracking-widest text-gray-400 font-overpass font-semibold border-b border-zinc-700 pb-2"
					>
						Information
					</h3>
					{#each infoRows as row}
						{#if row.value}
							<div>
								<p
									class="text-[10px] uppercase tracking-widest text-gray-500 font-overpass font-semibold"
								>
									{row.label}
								</p>
								<p class="text-sm text-white font-overpass font-light leading-snug mt-0.5">
									{row.value}
								</p>
							</div>
						{/if}
					{/each}
				</div>

				<!-- Alternative Titles -->
				{#if anime.titles && anime.titles.length > 1}
					<div class="bg-zinc-800/60 rounded-xl p-4 space-y-2">
						<h3
							class="text-xs uppercase tracking-widest text-gray-400 font-overpass font-semibold border-b border-zinc-700 pb-2"
						>
							Alternative Titles
						</h3>
						{#each anime.titles as t}
							<div>
								<p class="text-[10px] uppercase tracking-widest text-gray-500 font-overpass">
									{t.type}
								</p>
								<p class="text-sm text-white font-overpass font-light leading-snug">{t.title}</p>
							</div>
						{/each}
					</div>
				{/if}
			</aside>

			<!-- Main content -->
			<main class="flex-1 min-w-0 space-y-8">
				<!-- Synopsis -->
				<section>
					<h2
						class="text-base font-bold text-white font-overpass border-l-4 border-[#ff3e00] pl-3 mb-4"
					>
						Synopsis
					</h2>
					<p class="text-gray-300 font-overpass font-light text-sm leading-relaxed">
						{anime.synopsis ?? 'No synopsis available.'}
					</p>
				</section>

				<!-- Trailer -->
				{#if anime.trailer?.youtube_id}
					<section>
						<h2
							class="text-base font-bold text-white font-overpass border-l-4 border-[#ff3e00] pl-3 mb-4"
						>
							Trailer
						</h2>
						<div class="rounded-xl overflow-hidden">
							<Youtube id={anime.trailer.youtube_id} />
						</div>
					</section>
				{/if}
			</main>
		</div>
	</div>
</div>
