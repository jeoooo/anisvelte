<script>
	import AnimeSection1 from './Sections/AnimeSection1.svelte';
	// code
</script>

<div class="container">
	<div class="sections">
		<AnimeSection1 />
	</div>
	<div class="ranking">ranking</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1.5fr 0.5fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'sections ranking';
	}

	.sections {
		grid-area: sections;
	}

	.ranking {
		grid-area: ranking;
	}
</style>
