<script lang="ts">
	import { onMount } from 'svelte';
	import IndexCard from '../IndexCard.svelte';
	import LatestEpisodeCard from '../LatestEpisodeCard.svelte';
	import NewsCard from '../NewsCard.svelte';

	interface Seasonal_Anime {
		title: string;
		images: {
			jpg: {
				image_url: string;
			};
		};
	}

	interface RecentAnime {
		episodes: any;
		entry: any;
		data: {
			entry: {
				title: string;
				images: {
					jpg: {
						image_url: string;
					};
				};
			};
			episodes: {
				title: string;
			}[];
		}[];
	}

	let seasonal_anime: Seasonal_Anime[] = []; // Initialize as an empty array
	let latest_episodes: RecentAnime[] = []; // Initialize as an empty array

	async function fetchSeasonalAnime() {
		try {
			const latest_seasonal_anime_response = await fetch(
				'https://api.jikan.moe/v4/seasons/now?page=1&limit=5'
			);
			const data = await latest_seasonal_anime_response.json();
			seasonal_anime = data.data;

			// log recent seasonal anime
			// console.log(seasonal_anime);
		} catch (error) {
			console.error('Error fetching seasonal anime data:', error);
		}
	}

	async function fetchLatestEpisodes() {
		try {
			const latest_episodes_response = await fetch('https://api.jikan.moe/v4/watch/episodes');
			const data = await latest_episodes_response.json();
			latest_episodes = data.data;

			// log latest episodes
			console.log(latest_episodes);
		} catch (error) {
			console.error('Error fetching latest episodes data:', error);
		}
	}

	onMount(() => {
		fetchSeasonalAnime();
		fetchLatestEpisodes();
	});
</script>

<div class="container mb-3">
	<div class="title">
		<h3 class="text-primary fw-bold m-2">Anime 2023</h3>
		<button type="button" class="btn btn-primary" style="position: absolute; left: 975px;">
			View More <i class="bi bi-arrow-right" />
		</button>
	</div>
	<div class="cards">
		{#each seasonal_anime as anime}
			<IndexCard
				latest_seasonal_anime_title={anime.title}
				latest_seasonal_anime_img={anime.images.jpg.image_url}
			/>
			<!-- Pass the anime title to IndexCard -->
		{/each}
	</div>
</div>
<div class="container mb-3">
	<div class="title">
		<h3 class="text-primary fw-bold m-2">Latest Updated Anime Episodes</h3>
	</div>
	<button type="button" class="btn btn-primary" style="position: absolute; left: 975px;">
		View More <i class="bi bi-arrow-right" />
	</button>
	<div class="cards">
		{#each latest_episodes.slice(0, 5) as episode}
			<LatestEpisodeCard
				latest_episode_anime_title={episode.entry.title}
				latest_episode_anime_img={episode.entry.images.jpg.image_url}
				latest_episode_anime_episode={episode.episodes[0].title}
			/>
		{/each}
	</div>
</div>

<!-- arrange the cards below placed as rows instead of by columns -->
<div class="container mb-3">
	<div class="title">
		<h3 class="text-primary fw-bold m-2">Anime and Manga News</h3>
	</div>
	<button type="button" class="btn btn-primary" style="position: absolute; left: 975px;">
		View More <i class="bi bi-arrow-right" />
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
