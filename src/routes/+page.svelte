<script lang="ts">
	import RecommendedMangaCard from './../lib/components/Cards/RecommendedMangaCard.svelte';
	import LatestEpisodeCard from './../lib/components/LatestEpisodeCard.svelte';
	import SeasonAnimeCard from './../lib/components/Cards/SeasonAnimeCard.svelte';
	import RankingCard from '$lib/components/Cards/RankingCard.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { onMount } from 'svelte';
	// @ts-ignore
	export let data;

	// @ts-ignore
	const { seasonal_anime, top_anime_by_popularity, recent_episodes } = data;

	const RECOMMENDED_MANGA =
		'https://api.jikan.moe/v4/manga?sfw&type=manga&min_score=8.50&max_score=10.00&status=publishing&sfw=true&order_by=popularity&sort=desc';

	const TOP_ANIME_FAVORITES = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=favorite&limit=10';

	const TOP_MANGA = 'https://api.jikan.moe/v4/top/manga?limit=9&type=manga&filter=bypopularity';

	const fetchAnimeFavorites = async () => {
		const res = await fetch(TOP_ANIME_FAVORITES);
		const data = await res.json();

		return data.data;
	};

	const fetchTopManga = async () => {
		const res = await fetch(TOP_MANGA);
		const data = await res.json();

		return data.data;
	};

	let recommendedManga: any = []; // Initialize an empty array to store the data
	let animeFavorites: any = [];
	let topmanga: any = [];

	// Use the onMount lifecycle function to fetch data when the component mounts
	onMount(async () => {
		const res = await fetch(RECOMMENDED_MANGA);
		const data = await res.json();
		recommendedManga = data.data; // Assign the data to the recommendedManga variable

		// Fetch anime favorites data using the fetchAnimeFavorites function
		animeFavorites = await fetchAnimeFavorites();
		topmanga = await fetchTopManga();
	});

	// Create a variable for the number of seasonal anime cards to render
	const MAX_CARDS = 5; // You can adjust this as needed
	const MAX_CARDS_RANKING = 10; // You can adjust this as needed
</script>

<div class="container">
	<div class="hero">
		<div class="hero-box">
			<Hero />
		</div>
	</div>
	<div class="section">
		<div class="anime-cards pb-4">
			<div class="seasonal-anime">
				<div class="section-title">
					<h3 class="text-primary fw-bold" style="margin-bottom: -1100px;">Summer 2023 Anime</h3>
				</div>
				{#each seasonal_anime as anime}
					<a href={`/anime/${anime.id}`} rel="anime link">
						<SeasonAnimeCard image={anime.images.jpg.image_url} title={anime.titles[0].title} />
					</a>
				{/each}
			</div>
			<div class="latest-episodes">
				<div class="section-title-2">
					<h3 class="text-primary fw-bold m-2">Latest Anime Episodes</h3>
				</div>
				{#each recent_episodes.slice(0, MAX_CARDS) as anime}
					<a href={`/anime/${anime.id}`} rel="anime link">
						<LatestEpisodeCard
							title={anime.entry.title}
							image={anime.entry.images.jpg.image_url}
							episode={anime.episodes[0].title}
						/>
					</a>
				{/each}
			</div>
			<div class="recommended-manga">
				<div class="section-title-3">
					<h3 class="text-primary fw-bold m-2">Recommended Manga</h3>
				</div>
				{#each recommendedManga.slice(0, MAX_CARDS_RANKING) as manga}
					<a href={`/manga/${manga.id}`} rel="anime link">
						<RecommendedMangaCard
							image={manga.images.jpg.image_url}
							title={manga.titles[0].title}
						/>
					</a>
				{/each}
			</div>
		</div>
		<div class="ranking">
			<div class="popular-anime">
				<h3 class="text-primary fw-bold mb-2">Popular Anime</h3>
				{#each top_anime_by_popularity as anime}
					<a href={`/anime/${anime.id}`} rel="anime link">
						<RankingCard
							title={anime.title}
							ranking={anime.popularity}
							image={anime.images.jpg.image_url}
							studio={anime.studios[0].name}
						/>
					</a>
				{/each}
			</div>
			<div class="top-anime">
				<h3 class="text-primary fw-bold mb-2">Popular Manga</h3>
				{#each topmanga.slice(0, MAX_CARDS_RANKING) as manga}
					<a href={`/manga/${manga.id}`} rel="anime link">
						<RankingCard
							title={manga.titles[0].title}
							ranking={manga.popularity}
							image={manga.images.jpg.image_url}
							studio={manga.authors[0].name}
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 2.1fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'hero'
			'section';
	}

	.hero {
		display: grid;
		grid-template-columns: 1.2fr max-content 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '. hero-box .';
		grid-area: hero;
	}

	.hero-box {
		grid-area: hero-box;
	}

	.section {
		display: grid;
		grid-template-columns: 1.5fr 0.5fr;
		grid-template-rows: 1fr;
		gap: 0px 10px;
		grid-auto-flow: row;
		grid-template-areas: 'anime-cards rankings';
		grid-area: section;
	}

	.anime-cards {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content max-content max-content;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'seasonal-anime'
			'latest-episodes'
			'recommended-manga';
		grid-area: anime-cards;
	}

	.seasonal-anime {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 50px 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title section-title section-title section-title section-title'
			'. . . . .';
		grid-area: seasonal-anime;
	}

	.section-title {
		display: grid;
		grid-template-columns: 1.6fr 0.4fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '. .';
		grid-area: section-title;
	}

	.latest-episodes {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 50px 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title-2 section-title-2 section-title-2 section-title-2 section-title-2'
			'. . . . .';
		grid-area: latest-episodes;
	}

	.section-title-2 {
		display: grid;
		grid-template-columns: 1.6fr 0.4fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '. .';
		grid-area: section-title-2;
	}

	.recommended-manga {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 50px 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'section-title-3 section-title-3 section-title-3 section-title-3 section-title-3'
			'. . . . .';
		grid-area: recommended-manga;
	}

	.section-title-3 {
		display: grid;
		grid-template-columns: 1.6fr 0.4fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '. .';
		grid-area: section-title-3;
	}

	.rankings {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'popular-anime'
			'top-anime'
			'popular-manga';
		grid-area: rankings;
	}

	.popular-anime {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.';
		grid-area: popular-anime;
	}

	.popular-manga {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.';
		grid-area: popular-manga;
	}

	.top-anime {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'.'
			'.';
		grid-area: top-anime;
	}
</style>
