<script>
	import AnimeSection1 from './Sections/AnimeSection1.svelte';
	import RankingSection from './Sections/RankingSection.svelte';
	// code
</script>

<div class="container">
	<div class="sections">
		<AnimeSection1 />
	</div>
	<div class="ranking">
		<RankingSection />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1.5fr 0.5fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 80px;
		grid-auto-flow: row;
		grid-template-areas: 'sections ranking';
	}

	.sections {
		grid-area: sections;
	}

	.ranking {
		grid-area: ranking;
		width: 300px;
	}
</style>
