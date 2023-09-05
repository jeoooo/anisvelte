<script lang="ts">
	import RecommendedMangaCard from './../lib/components/Cards/RecommendedMangaCard.svelte';

	import LatestEpisodeCard from './../lib/components/LatestEpisodeCard.svelte';
	import SeasonAnimeCard from './../lib/components/Cards/SeasonAnimeCard.svelte';
	import RankingCard from '$lib/components/Cards/RankingCard.svelte';

	import Hero from '$lib/components/Hero.svelte';
	import type { PageData } from './$types';

	// @ts-ignore
	export let data;

	// @ts-ignore
	const { seasonal_anime, top_anime_by_popularity, recent_episodes, recommended_manga } = data;

	// console.log(data);
	// @ts-ignore
	// console.log(data.recommended_manga[0].data.titles[0].title);
	// @ts-ignore
	// console.log(data.recommended_manga[0].data.images.jpg.image_url);
	// console.log(data.latest_episodes[0].entry.images.jpg.image_url);
	// Create a variable for the number of seasonal anime cards to render
	const MAX_CARDS = 10; // You can adjust this as needed
	const MAX_CARDS_RANKING = 10; // You can adjust this as needed
</script>

<div class="container">
	<div class="hero">
		<div class="hero-box">
			<Hero />
		</div>
	</div>
	<div class="section">
		<div class="anime-cards">
			<div class="seasonal-anime">
				<div class="section-title">
					<h3 class="text-primary fw-bold" style="margin-bottom: -1100px;">Summer 2023 Anime</h3>
				</div>
				{#each seasonal_anime as anime}
					<SeasonAnimeCard
						latest_seasonal_anime_img={anime.images.jpg.image_url}
						latest_seasonal_anime_title={anime.titles[0].title}
					/>
				{/each}
			</div>
			<div class="latest-episodes">
				<div class="section-title-2">
					<h3 class="text-primary fw-bold m-2">Latest Anime Episodes</h3>
				</div>
				{#each recent_episodes as anime}
					<LatestEpisodeCard
						latest_episode_anime_title={anime.title}
						latest_episode_anime_img={anime.images.jpg.image_url}
						latest_episode_anime_episode={anime.episodes[0].title}
					/>
				{/each}
			</div>
			<div class="recommended-manga">
				<div class="section-title-3">
					<h3 class="text-primary fw-bold m-2">Recommended Manga</h3>
				</div>
				{#each recommended_manga.slice(0, MAX_CARDS) as manga}
					<RecommendedMangaCard
						recommended_manga_img={manga.data.images.jpg.image_url}
						recommended_manga_title={manga.data.titles[0].title}
					/>
				{/each}
				<RecommendedMangaCard />
			</div>
		</div>
		<div class="ranking">
			<div class="popular-anime">
				<h3 class="text-primary fw-bold mb-2">Popular Anime</h3>
				{#each top_anime_by_popularity as anime}
					<RankingCard
						popular_anime_all_time_title={anime.title}
						popular_anime_all_time_ranking={anime.popularity}
						popular_anime_all_time_img={anime.images.jpg.image_url}
						popular_anime_all_time_studio={anime.studios[0].name}
					/>
				{/each}
			</div>
			<div class="top-anime">
				<h3 class="text-primary fw-bold mb-2">Popular Manga</h3>

				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
				<RankingCard />
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
