<script lang="ts">
	import { NumberFormatter } from '$lib/utils/NumberFormatter';

	let {
		rank,
		title = 'title',
		image_url = 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg',
		score = 0,
		scored_by = 0,
		type = 'anime'
	}: {
		rank?: number;
		title?: string;
		image_url?: string;
		score?: number;
		scored_by?: number;
		type?: string;
	} = $props();

	// Gold / silver / bronze for top 3, muted gray for the rest
	let rankColor = $derived(
		rank === 1
			? 'text-yellow-400'
			: rank === 2
				? 'text-gray-300'
				: rank === 3
					? 'text-amber-600'
					: 'text-gray-500'
	);

	let rankBg = $derived(
		rank === 1
			? 'bg-yellow-400/10'
			: rank === 2
				? 'bg-gray-300/10'
				: rank === 3
					? 'bg-amber-600/10'
					: ''
	);
</script>

{#if type === 'anime' || type === 'manga'}
	<div
		class="group bg-zinc-800 hover:bg-zinc-700/80 w-full rounded-xl mb-2 shadow-lg transition-all duration-200 hover:shadow-xl hover:shadow-black/40 overflow-hidden"
	>
		<div class="flex flex-row items-stretch">
			<!-- Rank badge -->
			{#if rank !== undefined}
				<div class="flex items-center justify-center w-10 sm:w-14 shrink-0 {rankBg}">
					<span class="font-overpass font-black text-sm sm:text-base tabular-nums {rankColor}"
						>#{rank}</span
					>
				</div>
			{/if}

			<!-- Cover image -->
			<div class="flex-shrink-0 w-16 h-24 sm:w-24 sm:h-36 md:w-28 md:h-40">
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			<!-- Info -->
			<div class="relative flex-1 min-w-0 p-3 sm:p-4">
				<p
					class="text-white text-sm sm:text-base md:text-lg font-bold font-overpass line-clamp-2 leading-snug pr-2"
				>
					{title}
				</p>

				<div
					class="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 flex flex-row items-center gap-2 font-overpass font-light text-xs sm:text-sm text-gray-400"
				>
					<i class="fa-solid fa-star text-yellow-400"></i>
					<span class="text-white">{score}</span>
					<span class="text-gray-600">·</span>
					<i class="fa-solid fa-comment text-gray-500 text-xs"></i>
					<span>{NumberFormatter.formatWithCommas(scored_by)}</span>
				</div>
			</div>
		</div>
	</div>
{/if}
