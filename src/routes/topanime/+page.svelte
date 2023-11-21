<script lang="ts">
	import RankingCard from '../components/RankingCard.svelte';

	export let data: {
		top_anime: {
			rank: number;
			title: string;
			images: { jpg: { large_image_url: string } };
			score: number;
			scored_by: number;
			type: string;
		}[];
	};
	let sortedTopAnime = [...data.top_anime].sort((a, b) => a.rank - b.rank);
</script>

<div class="bg-teal-500">
	<div class="flex flex-col px-24 py-10">
		<h1 class="font-black text-5xl my-4">Top Anime</h1>
		{#each sortedTopAnime as anime (anime.rank)}
			<RankingCard
				type="anime"
				rank={anime.rank}
				title={anime.title}
				image_url={anime.images.jpg.large_image_url}
				score={anime.score}
				scored_by={anime.scored_by}
			/>
		{/each}
	</div>
</div>
