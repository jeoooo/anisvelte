<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Youtube from 'svelte-youtube-embed';

	const mal_id = $page.params.mal_id;
	console.log(mal_id);

	let manga: any;
	let alternativeTitles: { [key: string]: string }[] = [];
	let genres: string[] = [];
	let themes: string[] = [];
	let demographics: string[] = [];
	let serializations: string[] = [];
	let authors: string[] = [];
	let members: number | undefined = undefined;
	let favorites: number | undefined = undefined;

	let membersFormatted: string = formatNumberWithCommas(members);
	let favoritesFormatted: string = formatNumberWithCommas(favorites);

	onMount(async () => {
		getMangaData();
	});

	async function getMangaData() {
		const url = 'https://api.jikan.moe/v4/manga/' + mal_id + '/full';
		const response = await fetch(url, { cache: 'default' });
		manga = await response.json();
		// console.log(manga.data.trailer.url);
		console.log(manga.data);

		if (manga?.data.titles) {
			alternativeTitles = manga.data.titles.map((title: any) => ({
				type: title.type,
				title: title.title
			}));
		}

		// Extract genres
		if (manga?.data.genres) {
			genres = manga.data.genres.map((genre: any) => genre.name);
		}
		// Extract themes
		if (manga?.data.themes) {
			themes = manga.data.themes.map((theme: any) => theme.name);
		}
		// Extract themes
		if (manga?.data.demographics) {
			demographics = manga.data.demographics.map((demographic: any) => demographic.name);
		}
		// Extract serializations
		if (manga?.data.serializations) {
			serializations = manga.data.serializations.map((serialization: any) => serialization.name);
		}
		// Extract authors
		if (manga?.data.authors) {
			authors = manga.data.authors.map((author: any) => author.name);
		}

		members = manga?.data.members;
		favorites = manga?.data.favorites;
		membersFormatted = formatNumberWithCommas(members);
		favoritesFormatted = formatNumberWithCommas(favorites);
	}

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
	<div class="header"><h1 class="fw-bold text-primary">{manga?.data.title_english}</h1></div>
	<div class="body">
		<div class="data">
			<div class="image">
				<center>
					<img src={manga?.data.images.jpg.image_url} alt="" />
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
									{manga?.data.type}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Volumes:</strong>
									{#if manga?.data.volumes == null}
										Unknown
									{:else}
										{manga?.data.volumes}
									{/if}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Chapters:</strong>
									{#if manga?.data.chapters == null}
										Unknown
									{:else}
										{manga?.data.chapters}
									{/if}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Status:</strong>
									{#if manga?.data.status == null}
										Unknown
									{:else}
										{manga?.data.status}
									{/if}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Published:</strong>
									{manga?.data.published.string}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Genres:</strong>
									{#if manga?.data.status == null}
										Unknown
									{:else}
										{genres.join(', ')}
									{/if}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Themes:</strong>
									{themes.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Demographics:</strong>
									{demographics.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Serializations:</strong>
									{serializations.join(', ')}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Authors:</strong>
									{authors.join(', ')}
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
									{manga?.data.score}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Rank:</strong>
									{manga?.data.rank}
								</p>
								<p class="fw-normal mb-1" style="font-size: 0.875em;">
									<strong>Rank:</strong>
									{manga?.data.popularity}
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
			<p class="m-0">{manga?.data.synopsis}</p>
			<h3 class="pb-2 mb-3 mt-3 text-primary border-bottom border-primary fw-bold">Background</h3>
			<p class="mb-3">{manga?.data.background}</p>
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
		grid-template-rows: max-content max-content max-content max-content max-content;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.'
			'.'
			'.';
		grid-area: description;
	}
</style>
