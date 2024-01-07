<script lang="ts">
	import RankingCard from '$lib/components/RankingCard.svelte';

	export let data: {
		top_anime: {
			mal_id: number;
			rank: number;
			title: string;
			images: { jpg: { large_image_url: string } };
			score: number;
			scored_by: number;
			type: string;
		}[];
	};

	// Create a computed property to sort the top anime by rank
	let sortedTopAnime = data.top_anime.slice().sort((a, b) => a.rank - b.rank);
</script>

<div class="bg-[#222]">
	<div class="flex flex-col px-32 py-10">
		<h1 class="font-black text-5xl my-4 font-overpass text-white">Top Anime</h1>
		{#each sortedTopAnime as anime}
			<a href="/anime/{anime.mal_id}" class="hover:scale-105 transition ease-in-out">
				<RankingCard
					type="anime"
					title={anime.title}
					image_url={anime.images.jpg.large_image_url}
					score={anime.score}
					scored_by={anime.scored_by}
				/>
			</a>
		{/each}
	</div>
</div>
