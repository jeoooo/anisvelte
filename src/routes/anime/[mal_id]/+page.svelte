<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	// export let data: PageData;

	let anime: any = {}; // Initialize as an empty array
	let latest_episodes; // Initialize as an empty array
	let recommended_manga; // Initialize as an empty array

	const ANIME = 'https://api.jikan.moe/v4/anime/51535/full';

	const fetchAnime = async () => {
		try {
			const res = await fetch(ANIME);
			const data = await res.json();

			if (res.ok) {
				return {
					image: data.data.images.jpg.image_url,
					title: data.data.titles[0].title,
					synopsis: data.data.synopsis
				};
			} else {
				throw new Error(`Failed to fetch anime: ${data.message}`);
			}
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	onMount(async () => {
		// Fetch anime favorites data using the fetchAnimeFavorites function
		anime = await fetchAnime();
	});
</script>

<div class="container">
	<div class="anime-details">
		<table class="tg">
			<thead>
				<tr>
					<th class="tg-0pky">th</th>
					<th class="tg-0lax">th</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="tg-0lax">td</td>
					<td class="tg-0lax">td</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="anime-thumbnail m-3">
		<img src={anime.image} alt="" />
	</div>
	<div class="anime-header">
		<h3>{anime.title}</h3>
	</div>
	<div class="anime-description">
		<p>
			{anime.synopsis}
		</p>
	</div>
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

	.tg {
		border-collapse: collapse;
		border-spacing: 0;
	}
	.tg td {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		font-family: Arial, sans-serif;
		font-size: 14px;
		overflow: hidden;
		padding: 10px 5px;
		word-break: normal;
	}
	.tg th {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		font-family: Arial, sans-serif;
		font-size: 14px;
		font-weight: normal;
		overflow: hidden;
		padding: 10px 5px;
		word-break: normal;
	}
	.tg .tg-0pky {
		border-color: inherit;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-0lax {
		text-align: left;
		vertical-align: top;
	}
</style>
