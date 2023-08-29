<script lang="ts">
	// code

	import IndexCard from './IndexCard.svelte';
</script>

<div class="container border border-danger mt-3 mb-3">
	<div class="ranks border border-danger">
		<div class="title border border-danger">
			<div class="section-title-2 border border-danger">
				<h3 class="fw-bold text-primary border-bottom border-0">Top Anime</h3>
			</div>
		</div>
		<div class="rankings border border-danger">rankings</div>
	</div>
	<div class="sections border border-danger">
		<div class="section1 border border-danger">
			<div class="section-title-1 border border-danger">
				<h3 class="fw-bold text-primary border-bottom border-0">Summer 2023 Anime</h3>
			</div>
			<div class="view-more border border-danger">view more</div>

			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
		</div>
		<div class="section2 border border-danger">
			<div class="section-title-2 border border-danger">
				<h3 class="fw-bold text-primary border-bottom border-0">Summer 2023 Anime</h3>
			</div>
			<div class="view-more-2 border border-danger">view more</div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
		</div>
		<div class="section3 border border-danger">
			<div class="section-title-3 border border-danger">
				<h3 class="fw-bold text-primary border-bottom border-0">Summer 2023 Anime</h3>
			</div>
			<div class="view-more-3 border border-danger">view more</div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
		</div>
		<div class="section4 border border-danger">
			<div class="section-title-4 border border-danger">
				<h3 class="fw-bold text-primary border-bottom border-0">Summer 2023 Anime</h3>
			</div>
			<div class="view-more-4 border border-danger">view more</div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
			<div><IndexCard /></div>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1.3fr 0.7fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'sections ranks';
		max-width: 90%;
	}

	.ranks {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 0.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'title'
			'rankings'
			'rankings'
			'rankings'
			'rankings'
			'rankings'
			'rankings';
		grid-area: ranks;
		margin-left: 4%;
	}

	.title {
		grid-area: title;
		max-height: 50px;
	}

	.rankings {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.'
			'.'
			'.'
			'.'
			'.'
			'.'
			'.'
			'.'
			'.';
		grid-area: rankings;
		margin-top: -50px;
	}

	.sections {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section1 section1 section1'
			'section2 section2 section2'
			'section3 section3 section3'
			'section4 section4 section4';
		grid-area: sections;
	}

	.section1 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 0.5fr 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title-1 section-title-1 section-title-1 section-title-1 view-more'
			'. . . . .';
		grid-area: section1;
		height: 40%;
	}

	.section-title-1 {
		grid-area: section-title-1;
		height: 50px;
	}

	.view-more {
		grid-area: view-more;
		height: 50px;
	}

	.section2 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 0.5fr 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title-2 section-title-2 section-title-2 section-title-2 view-more-2'
			'. . . . .';
		grid-area: section2;
		height: 40%;
	}

	.section-title-2 {
		grid-area: section-title-2;
		height: 50px;
	}

	.view-more-2 {
		grid-area: view-more-2;
	}

	.section3 {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr 1fr 1fr 1fr;
		grid-template-rows: 0.5fr 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title-3 section-title-3 section-title-3 section-title-3 view-more-3'
			'. . . . .';
		grid-area: section3;
		height: 40%;
	}

	.section-title-3 {
		grid-area: section-title-3;
		height: 50px;
	}

	.view-more-3 {
		grid-area: view-more-3;
	}

	.section4 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 0.5fr 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title-4 section-title-4 section-title-4 section-title-4 view-more-4'
			'. . . . .';
		grid-area: section4;
		height: 40%;
	}

	.section-title-4 {
		grid-area: section-title-4;
		height: 50px;
	}

	.view-more-4 {
		grid-area: view-more-4;
	}
</style>
