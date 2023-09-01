<script>
	import RankingCard from '../RankingCard.svelte';
</script>

<div class="container">
	<div class="title">News Section</div>
	<div class="cards">
		<RankingCard />
		<RankingCard />
		<RankingCard />
		<RankingCard />
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

	.cards {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '.';
		grid-area: cards;
	}

	.title {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '.';
		grid-area: title;
	}
</style>
