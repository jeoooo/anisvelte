<script lang="ts">
	import { NumberFormatter } from '$lib/utils/NumberFormatter';

	let {
		rank,
		title = 'title',
		image_url = 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg',
		score = 0,
		scored_by = 0,
		type = 'anime',
		year,
		episodes,
		volumes,
		chapters,
		members = 0,
		favorites = 0,
		status = 'Unknown',
		genres = [],
		media_type = 'anime'
	}: {
		rank?: number;
		title?: string;
		image_url?: string;
		score?: number;
		scored_by?: number;
		type?: string;
		year?: number;
		episodes?: number;
		volumes?: number;
		chapters?: number;
		members?: number;
		favorites?: number;
		status?: string;
		genres?: Array<{ name: string }>;
		media_type?: 'anime' | 'manga';
	} = $props();

	// Rank badge styling - special gradients for top 3
	let rankBg = $derived(
		rank === 1
			? 'bg-gradient-to-br from-yellow-400/20 to-amber-500/20 border-yellow-400/40'
			: rank === 2
				? 'bg-gradient-to-br from-gray-300/20 to-slate-400/20 border-gray-300/40'
				: rank === 3
					? 'bg-gradient-to-br from-amber-600/20 to-orange-600/20 border-amber-600/40'
					: 'bg-zinc-700/40 border-zinc-600/30'
	);

	let rankText = $derived(
		rank === 1
			? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500'
			: rank === 2
				? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-slate-400'
				: rank === 3
					? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600'
					: 'text-gray-400'
	);

	let rankBorder = $derived(
		rank === 1
			? 'border-l-4 border-yellow-400'
			: rank === 2
				? 'border-l-4 border-gray-300'
				: rank === 3
					? 'border-l-4 border-amber-600'
					: 'border-l-4 border-zinc-600'
	);

	// Format episodes/volumes for display
	let formatEpisodes = $derived(
		media_type === 'anime' && episodes ? `${episodes} eps` : volumes ? `${volumes} vols` : ''
	);
	let formatChapters = $derived(media_type === 'manga' && chapters ? `${chapters} chaps` : '');

	// Limit genres to display
	let displayGenres = $derived(genres.slice(0, 4));
</script>

{#if media_type === 'anime' || media_type === 'manga'}
	<div
		class="group relative w-full rounded-xl overflow-hidden bg-zinc-800/80 backdrop-blur-sm 
		       border border-zinc-700/50 shadow-lg
		       hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1
		       transition-all duration-300 ease-out {rankBorder}"
	>
		<div class="flex flex-row items-stretch">
			<!-- Rank badge -->
			{#if rank !== undefined}
				<div
					class="flex items-center justify-center w-12 sm:w-16 shrink-0 {rankBg} border-r border-zinc-700/50"
				>
					<span
						class="font-overpass font-black text-xl sm:text-2xl md:text-3xl tabular-nums {rankText}"
					>
						#{rank}
					</span>
				</div>
			{/if}

			<!-- Cover image -->
			<div class="flex-shrink-0 w-20 h-28 sm:w-28 sm:h-40 md:w-32 md:h-44 relative overflow-hidden">
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
				/>
				<!-- Gradient overlay on hover -->
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</div>

			<!-- Info content -->
			<div class="relative flex-1 min-w-0 p-3 sm:p-4 md:p-5 flex flex-col">
				<!-- Title -->
				<h3
					class="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold font-overpass line-clamp-2 leading-snug mb-2 group-hover:text-[#ff3e00] transition-colors duration-200"
				>
					{title}
				</h3>

				<!-- Score section -->
				{#if score > 0}
					<div class="flex items-center gap-2 mb-2 sm:mb-3">
						<div class="flex items-center gap-1.5">
							<i class="fa-solid fa-star text-yellow-400 text-sm sm:text-base"></i>
							<span class="text-white font-bold text-base sm:text-lg">{score}</span>
						</div>
						{#if scored_by > 0}
							<span class="text-gray-500 text-xs sm:text-sm font-overpass">
								({NumberFormatter.formatWithCommas(scored_by)})
							</span>
						{/if}
					</div>
				{/if}

				<!-- Metadata grid -->
				<div
					class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 text-xs sm:text-sm"
				>
					{#if type}
						<span class="text-gray-300 font-medium bg-zinc-700/50 px-2 py-0.5 rounded">
							{type}
						</span>
					{/if}
					{#if year}
						<span class="text-gray-400 font-light bg-zinc-700/30 px-2 py-0.5 rounded">
							{year}
						</span>
					{/if}
					{#if status}
						<span class="text-gray-400 font-light bg-zinc-700/30 px-2 py-0.5 rounded">
							{status}
						</span>
					{/if}
					{#if formatEpisodes}
						<span class="text-gray-400 font-light bg-zinc-700/30 px-2 py-0.5 rounded">
							{formatEpisodes}
						</span>
					{/if}
					{#if formatChapters}
						<span class="text-gray-400 font-light bg-zinc-700/30 px-2 py-0.5 rounded">
							{formatChapters}
						</span>
					{/if}
				</div>

				<!-- Genre tags -->
				{#if displayGenres.length > 0}
					<div class="flex flex-wrap gap-1.5 mb-2 sm:mb-3 overflow-hidden">
						{#each displayGenres as genre}
							<span
								class="text-[10px] sm:text-xs font-overpass font-medium text-gray-300 
								       bg-zinc-700/40 border border-zinc-600/30 px-2 py-0.5 rounded-full
								       hover:bg-zinc-700/60 hover:border-zinc-500/40 transition-all duration-200"
							>
								{genre.name}
							</span>
						{/each}
					</div>
				{/if}

				<!-- Stats row (members & favorites) -->
				<div class="mt-auto flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
					{#if members > 0}
						<div class="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 transition-colors">
							<i class="fa-solid fa-users text-gray-500"></i>
							<span class="font-overpass font-light">
								{NumberFormatter.formatWithCommas(members)}
							</span>
						</div>
					{/if}
					{#if favorites > 0}
						<div class="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 transition-colors">
							<i class="fa-solid fa-heart text-gray-500"></i>
							<span class="font-overpass font-light">
								{NumberFormatter.formatWithCommas(favorites)}
							</span>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
