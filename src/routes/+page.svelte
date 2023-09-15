<script lang="ts">
	import SeasonAnimeCard from './../lib/components/Cards/SeasonAnimeCard.svelte';
	import RankingCard from '$lib/components/Cards/RankingCard.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { onMount } from 'svelte';
	// @ts-ignore
	export let data;

	// @ts-ignore
	const { seasonal_anime, top_anime_by_popularity, top_manga } = data;

	let recommendedManga: any = []; // Initialize an empty array to store the data
	let animeFavorites: any = [];
	let topmanga: any = [];

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
					<a href={`/anime/${anime.mal_id}`} rel="anime link">
						<SeasonAnimeCard image={anime.images.jpg.image_url} title={anime.titles[0].title} />
					</a>
				{/each}
			</div>
		</div>
		<div class="ranking">
			<div class="popular-anime">
				<h3 class="text-primary fw-bold mb-2">Popular Anime</h3>
				{#each top_anime_by_popularity as anime}
					<a href={`/anime/${anime.mal_id}`} rel="anime link">
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
				{#each top_manga.slice(0, MAX_CARDS_RANKING) as manga}
					<a href={`/manga/${manga.mal_id}`} rel="anime link">
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
