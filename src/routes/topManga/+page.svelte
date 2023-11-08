<script lang="ts">
	import RankingCard from '../components/RankingCard.svelte';

	export let data: {
		top_manga: {
			rank: number;
			title: string;
			images: { jpg: { large_image_url: string } };
			score: number;
			scored_by: number;
			type: string;
		}[];
	};
	let sortedTopManga = [...data.top_manga].sort((a, b) => a.rank - b.rank);
</script>

<div class="flex flex-col">
	<h1 class="text-white py-2 px-3 text-4xl font-bold">Top Anime</h1>
	<div class="w-[1200px] my-3">
		{#each sortedTopManga as manga (manga.rank)}
			<RankingCard
				type="manga"
				rank={manga.rank}
				title={manga.title}
				image_url={manga.images.jpg.large_image_url}
				score={manga.score}
				scored_by={manga.scored_by}
			/>
		{/each}
	</div>
</div>
