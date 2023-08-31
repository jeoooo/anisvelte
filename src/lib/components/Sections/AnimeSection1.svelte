<script>
	import RankingCard from '$lib/components/Catalog.svelte';
	import IndexCard from '../IndexCard.svelte';
</script>

<div class="container">
	<div class="container">
		<div class="title">title</div>
		<div class="cards">
			<IndexCard />
			<IndexCard />
			<IndexCard />
			<IndexCard />
			<IndexCard />
		</div>
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
</style>
