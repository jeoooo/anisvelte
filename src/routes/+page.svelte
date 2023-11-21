<script lang="ts">
	import ItemCard from './components/ItemCard.svelte';
	import RankingCard from './components/RankingCard.svelte';
	import type { PageData } from './$types';
	import { NumberFormatter } from '$lib/utils/NumberFormatter';

	export let data;
	// @ts-ignore
	const { seasonal_anime, upcoming_anime } = data;
</script>

<div class="flex justify-center bg-[#222] w-full h-auto gap-4">
	<div class="flex flex-col px-32">
		<h1 class="text-5xl text-white font-black my-8 mx-4 font-overpass">Seasonal Anime</h1>
		<div class=" grid grid-cols-5 w-auto h-auto gap-4 mb-20 mx-4">
			{#each seasonal_anime as anime}
				<ItemCard
					image_url={anime.images.jpg.large_image_url}
					score={anime.score}
					scored_by={anime.scored_by}
					title={anime.title}
				/>
			{/each}
		</div>
		<h1 class="text-5xl text-white font-black my-8 mx-4 font-overpass">Upcoming Anime</h1>
		<div class=" grid grid-cols-5 w-auto h-auto gap-4 mb-20 mx-4">
			{#each upcoming_anime as anime}
				<ItemCard
					image_url={anime.images.jpg.large_image_url}
					score={anime.score}
					scored_by={anime.scored_by}
					title={anime.title}
					type="upcoming"
				/>
			{/each}
		</div>
	</div>
</div>
