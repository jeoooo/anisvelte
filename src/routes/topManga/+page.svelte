<script lang="ts">
	import RankingCard from '../../lib/components/RankingCard.svelte';

	export let data: {
		top_manga: {
			mal_id: number;
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

<div class="bg-[#222]">
	<div class="flex flex-col px-32 py-10">
		<h1 class="font-black text-5xl my-4 font-overpass text-white">Top Manga</h1>
		{#each sortedTopManga as manga (manga.rank)}
			<a href="/manga/{manga.mal_id}" class="hover:scale-105 transition ease-in-out">
				<RankingCard
					type="manga"
					title={manga.title}
					image_url={manga.images.jpg.large_image_url}
					score={manga.score}
					scored_by={manga.scored_by}
				/>
			</a>
		{/each}
	</div>
</div>
