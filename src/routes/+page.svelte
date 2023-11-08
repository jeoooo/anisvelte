<script lang="ts">
	import ItemCard from './components/ItemCard.svelte';
	import RankingCard from './components/RankingCard.svelte';
	import type { PageData } from './$types';

	export let data;
	// @ts-ignore
	const { seasonal_anime, upcoming_anime } = data;
</script>

<div class="flex flex-col mt-10">
	<div class="my-3 p-3">
		<p class="py-6 px-0 text-4xl text-white font-bold">Seasonal Anime</p>

		<!-- Use responsive grid classes -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
			{#each seasonal_anime as anime}
				<ItemCard
					image_url={anime.images.jpg.large_image_url}
					score={anime.score}
					scored_by={anime.scored_by}
					title={anime.title}
				/>
			{/each}
		</div>
	</div>

	<div class="my-3 p-3">
		<p class="py-6 px-0 text-4xl text-white font-bold">Upcoming Anime</p>

		<!-- Use responsive grid classes -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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

<!-- <div class="flex flex-col py-3">


	<div class="grid grid-cols-5 grid-flow-row bg-blue-500 p-6 gap-3">
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
		<ItemCard />
	</div>
</div> -->

<!-- {#each seasonal_anime as anime}
	<i class="fa-solid fa-comment text-yellow-400" /> 15,000
	<div class="flex flex-col h-auto w-auto border border-black rounded-md">
		<div class="flex flex-row p-6">
			
			<div class="">
				<img src={anime.images.jpg.large_image_url} alt="" class="rounded-md" />
			</div>

			<h6 class="p-6">{anime.titles[0].title}</h6>
		</div>
	</div>
{/each} -->

<!-- <h1 class=" p-3">Top Anime</h1>
{#each top_anime_by_popularity as anime}
	<div class="flex flex-row"><h6>{anime.titles[0].title}</h6></div>
{/each} -->

<!-- <h1 class=" p-3">Top Manga</h1>
{#each top_manga as manga}
	<div class="flex flex-row"><h6>{manga.titles[0].title}</h6></div>
{/each} -->
