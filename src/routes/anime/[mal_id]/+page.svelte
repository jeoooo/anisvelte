<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Youtube from 'svelte-youtube-embed';

	const mal_id = $page.params.mal_id;
	console.log(mal_id);

	let anime: any;

	let producerNames: string[] = [];
	let licensorNames: string[] = [];
	let studioNames: string[] = [];
	let source: string | undefined;
	let genres: string[] = [];
	let themes: string[] = [];
	let alternativeTitles: { [key: string]: string }[] = [];
	let demographics: string[] = [];
	let duration: string | undefined = '';
	let rating: string | undefined = '';

	let score: number | undefined = undefined;
	let rank: number | undefined = undefined;
	let popularity: number | undefined = undefined;
	let members: number | undefined = undefined;
	let favorites: number | undefined = undefined;

	let rankFormatted: string = formatNumberWithCommas(rank);
	let popularityFormatted: string = formatNumberWithCommas(popularity);
	let membersFormatted: string = formatNumberWithCommas(members);
	let favoritesFormatted: string = formatNumberWithCommas(favorites);

	let trailerEmbedUrl: string | undefined;

	onMount(async () => {
		const url = 'https://api.jikan.moe/v4/anime/' + mal_id + '/full';
		const response = await fetch(url, { cache: 'default' });
		anime = await response.json();
		console.log(anime.data.trailer.url);
		console.log(anime.data);

		// Extract producer names
		if (anime?.data.producers) {
			producerNames = anime.data.producers.map((producer: any) => producer.name);
		}

		// Extract licensor names
		if (anime?.data.licensors) {
			licensorNames = anime.data.licensors.map((licensor: any) => licensor.name);
		}

		// Extract studio names
		if (anime?.data.studios) {
			studioNames = anime.data.studios.map((studio: any) => studio.name);
		}

		// Extract source
		source = anime?.data.source;

		// Extract genres
		if (anime?.data.genres) {
			genres = anime.data.genres.map((genre: any) => genre.name);
		}

		// Extract themes
		if (anime?.data.themes) {
			themes = anime.data.themes.map((theme: any) => theme.name);
		}
		// Extract alternative titles
		if (anime?.data.titles) {
			alternativeTitles = anime.data.titles.map((title: any) => ({
				type: title.type,
				title: title.title
			}));
		}
		if (anime?.trailer) {
			trailerEmbedUrl = anime.trailer.url; // Assuming the URL is available in the API response
		}

		// Extract demographics, duration, and rating
		demographics = anime?.data.demographics || [];
		duration = anime?.data.duration;
		rating = anime?.data.rating;

		score = anime?.data.score;
		rank = anime?.data.rank;
		popularity = anime?.data.popularity;
		members = anime?.data.members;
		favorites = anime?.data.favorites;

		// Format the values with commas
		rankFormatted = formatNumberWithCommas(rank);
		popularityFormatted = formatNumberWithCommas(popularity);
		membersFormatted = formatNumberWithCommas(members);
		favoritesFormatted = formatNumberWithCommas(favorites);
	});

	function capitalizeFirstLetter(string: string | undefined): string | undefined {
		if (string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		return undefined;
	}

	function formatNumberWithCommas(number: number | undefined): string {
		if (number !== undefined) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
		return 'N/A';
	}
</script>

<div class="container mt-3 mb-3">
	<div class="header">
		<h1 class="fw-bold text-primary">
			{anime?.data.titles[0].title}
		</h1>
	</div>

	<div class="body">
		<div class="data">
			<div class="image">
				<center>
					<img src={anime?.data.images.jpg.image_url} alt="" />
				</center>
			</div>
			<div class="stats mt-3">
				<table class="tg">
					<thead>
						<tr>
							<th class="tg-0pky">
								<h6 class="fw-bold pb-2 mb-2 text-primary border-bottom border-primary">
									Alternative Titles
								</h6>
								{#each alternativeTitles as title}
									<p class="fw-normal mb-1" style="font-size: 0.875em;">
										<strong>{title.type}:</strong>
										{title.title}
									</p>
								{/each}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="tg-0lax">
								<h6 class="fw-bold pb-2 mt-3 mb-3 text-primary border-bottom border-primary">
									Information
								</h6>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Type:</strong>
									{anime?.data.type}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Episodes:</strong>
									{anime?.data.episodes}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Status:</strong>
									{#if anime?.data.airing}
										Currently Airing
									{/if}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Aired:</strong>
									{anime?.data.aired.string}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Premiered:</strong>
									{capitalizeFirstLetter(anime?.data.season)}
									{anime?.data.year}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Broadcast:</strong>
									{anime?.data.broadcast.string}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Producers:</strong>
									{producerNames.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Licensors:</strong>
									{licensorNames.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Studios:</strong>
									{studioNames.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Source:</strong>
									{source}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Genres:</strong>
									{genres.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Themes:</strong>
									{themes.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Duration:</strong>
									{duration}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Rating:</strong>
									{rating}
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<h6 class="fw-bold pb-2 mt-3 mb-3 text-primary border-bottom border-primary">
									Statistics
								</h6>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Score:</strong>
									{score !== undefined ? score.toFixed(2) : 'N/A'}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Rank:</strong>
									{rankFormatted}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Popularity:</strong>
									{popularityFormatted}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Members:</strong>
									{membersFormatted}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Favorites:</strong>
									{favoritesFormatted}
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="description">
			<h3 class="pb-2 mb-3 text-primary border-bottom border-primary fw-bold">Synopsis</h3>
			<p class="m-0">{anime?.data.synopsis}</p>
			<h3 class="pb-2 mb-3 mt-3 text-primary border-bottom border-primary fw-bold">Background</h3>
			{#if anime?.data.trailer?.youtube_id === null}
				<p class="mb-3">{anime?.data.background}</p>
			{:else}
				<p>No background information has been added to this title.</p>
			{/if}
			<h3 class="pb-2 mb-3 text-primary border-bottom border-primary fw-bold">Trailer/s</h3>

			{#if anime?.data.trailer?.youtube_id}
				<Youtube id={anime.data.trailer.youtube_id} />
			{:else}
				<!-- Render something else or a message when youtube_id does not exist -->
				<p>No trailer available</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 0px 2.4fr 1%;
		grid-template-rows: 80px max-content;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 5px 0%;
		grid-auto-flow: row;
		grid-template-areas:
			'. header .'
			'. body .';
		max-width: 1400px;
	}

	.header {
		display: grid;
		grid-template-columns: max-content;
		grid-template-rows: max-content;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '.';
		grid-area: header;
	}

	.body {
		display: grid;
		grid-template-columns: 0.5fr 1.3fr;
		grid-template-rows: max-content;
		gap: 0px 30px;
		grid-auto-flow: row;
		grid-template-areas: 'data description';
		grid-area: body;
	}

	.data {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'image'
			'stats';
		grid-area: data;

		/* Add a right border with your desired width and style */
		border-right: 1px solid #2e51a2; /* You can adjust the width and color as needed */
		padding: 20px;
	}

	.image {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '.';
		grid-area: image;
	}

	.stats {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '.';
		grid-area: stats;
	}

	.description {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content max-content max-content max-content max-content max-content;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.'
			'.'
			'.'
			'.';
		grid-area: description;
	}
</style>
