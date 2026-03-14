<script lang="ts">
	import { NumberFormatter } from '$lib/utils/NumberFormatter';

	let {
		rank,
		image_url = 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg',
		title = 'title',
		score: scoreProp = 0,
		scored_by: scoredByProp = 0,
		type = 'seasonal'
	}: {
		rank?: number;
		image_url?: string;
		title?: string;
		score?: number;
		scored_by?: number;
		type?: string;
	} = $props();

	let score = $derived(scoreProp ?? 0);
	let scored_by = $derived(scoredByProp ?? 0);
</script>

<div
	class="group relative w-full rounded-xl overflow-hidden bg-zinc-800 shadow-md
	       hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1
	       transition-all duration-300 ease-out"
>
	<div class="relative w-full h-[200px] sm:h-[260px] md:h-[300px] overflow-hidden">
		<img
			src={image_url}
			alt={title}
			class="w-full h-full object-cover saturate-150 group-hover:scale-105 transition-transform duration-500 ease-out"
		/>

		<!-- Rank badge -->
		{#if rank !== undefined}
			<div
				class="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded-md px-1.5 py-0.5"
			>
				<span class="text-white text-xs font-overpass font-semibold">#{rank}</span>
			</div>
		{/if}

		<!-- Score overlay (seasonal only) -->
		{#if type === 'seasonal' && score !== 0 && scored_by !== 0}
			<div
				class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-2.5 pb-2 pt-10"
			>
				<div class="flex items-center gap-1.5">
					<i class="fa-solid fa-star text-yellow-400 text-xs"></i>
					<span class="text-white text-xs font-overpass font-semibold">{score}</span>
					<span class="text-gray-400 text-xs font-overpass">
						({NumberFormatter.formatWithCommas(scored_by)})
					</span>
				</div>
			</div>
		{/if}
	</div>

	<!-- Title -->
	<div class="px-2.5 py-2">
		<h3 class="text-white text-xs sm:text-sm font-overpass leading-snug line-clamp-2">{title}</h3>
	</div>
</div>
