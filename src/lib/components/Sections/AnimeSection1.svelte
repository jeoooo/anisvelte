<script>
	import RankingCard from '$lib/components/RankingCard.svelte';
	import IndexCard from '../IndexCard.svelte';
	import LatestEpisodeCard from '../LatestEpisodeCard.svelte';
	import NewsCard from '../NewsCard.svelte';
</script>

<div class="container mb-3">
	<div class="title">
		<h3 class="text-primary fw-bold m-2">Anime 2023</h3>
		<button type="button" class="btn btn-primary" style="position: absolute; left: 975px;">
			View More
			<i class="bi bi-arrow-right" />
		</button>
	</div>
	<div class="cards">
		<IndexCard />
		<IndexCard />
		<IndexCard />
		<IndexCard />
		<IndexCard />
	</div>
</div>
<div class="container mb-3">
	<div class="title">
		<h3 class="text-primary fw-bold m-2">Latest Updated Anime Episodes</h3>
	</div>
	<button type="button" class="btn btn-primary" style="position: absolute; left: 975px;">
		View More
		<i class="bi bi-arrow-right" />
	</button>
	<div class="cards">
		<LatestEpisodeCard />
		<LatestEpisodeCard />
		<LatestEpisodeCard />
		<LatestEpisodeCard />
		<LatestEpisodeCard />
	</div>
</div>

<!-- arrange the cards below placed as rows instead of by columns -->
<div class="container mb-3">
	<div class="title">
		<h3 class="text-primary fw-bold m-2">Anime and Manga News</h3>
	</div>
	<button type="button" class="btn btn-primary" style="position: absolute; left: 975px;">
		View More
		<i class="bi bi-arrow-right" />
	</button>
	<div class="cards-row" style="margin-top: 10px;">
		<NewsCard />
		<NewsCard />
		<NewsCard />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 0.1fr 1fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'title title title title title'
			'cards cards cards cards cards';
	}

	.title {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-template-areas: '.';
		grid-area: title;
	}

	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '. . . . .';
		grid-area: cards;
	}
	/* New style for arranging cards in rows */
	.cards-row {
		display: flex;
		flex-direction: column; /* Display cards in a column */
		gap: 2px; /* Adjust the gap between cards */
		width: 1000px;
	}
</style>
