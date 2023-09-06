<script lang="ts">
	import type { PageData } from './$types';

	// export let data: PageData;

	let image; // Initialize as an empty array
	let latest_episodes; // Initialize as an empty array
	let recommended_manga; // Initialize as an empty array

	async function fetchAnimeImage() {
		try {
			const latest_seasonal_anime_response = await fetch(
				'https://api.jikan.moe/v4/seasons/now?page=1&limit=5'
			);
			const data = await latest_seasonal_anime_response.json();
			image = data.data;

			// log recent seasonal anime
			// console.log(seasonal_anime);
		} catch (error) {
			console.error('Error fetching:', error);
		}
	}
</script>

<div class="container">
	<div class="anime-details">anime details</div>
	<div class="anime-thumbnail">thumbnail</div>
	<div class="anime-header">anime header</div>
	<div class="anime-description">anime descrption</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 0.5fr 1.5fr;
		grid-template-rows: 0.5fr 1.5fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 0%;
		grid-auto-flow: row;
		grid-template-areas:
			'anime-thumbnail anime-header'
			'anime-details anime-description';
	}

	.anime-details {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.'
			'.';
		grid-area: anime-details;
	}

	.anime-thumbnail {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '.';
		grid-area: anime-thumbnail;
	}

	.anime-header {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.'
			'.';
		grid-area: anime-header;
	}

	.anime-description {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.'
			'.';
		grid-area: anime-description;
	}
</style>
