<script lang="ts">
	import { onMount } from 'svelte';
	import RankingCard from '../RankingCard.svelte';

	// api endpoint
	// https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=false&limit=10

	interface PopularAnimeAllTime {
		[x: string]: any;
		data: {
			mal_id: number;
			url: string;
			images: {
				jpg: {
					image_url: string;
					small_image_url: string;
					large_image_url: string;
				};
				webp: {
					image_url: string;
					small_image_url: string;
					large_image_url: string;
				};
			};
			trailer: {
				youtube_id: string;
				url: string;
				embed_url: string;
			};
			approved: boolean;
			titles: {
				type: string;
				title: string;
			}[];
			title: string;
			title_english: string;
			title_japanese: string;
			title_synonyms: string[];
			type: string;
			source: string;
			episodes: number;
			status: string;
			airing: boolean;
			aired: {
				from: string;
				to: string;
				prop: {
					from: {
						day: number;
						month: number;
						year: number;
					};
					to: {
						day: number;
						month: number;
						year: number;
					};
					string: string;
				};
			};
			duration: string;
			rating: string;
			score: number;
			scored_by: number;
			rank: number;
			popularity: number;
			members: number;
			favorites: number;
			synopsis: string;
			background: string;
			season: string;
			year: number;
			broadcast: {
				day: string;
				time: string;
				timezone: string;
				string: string;
			};
			producers: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
			licensors: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
			studios: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
			genres: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
			explicit_genres: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
			themes: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
			demographics: {
				mal_id: number;
				type: string;
				name: string;
				url: string;
			}[];
		}[];
		pagination: {
			last_visible_page: number;
			has_next_page: boolean;
			items: {
				count: number;
				total: number;
				per_page: number;
			};
		};
	}

	let popular_anime_all_time: PopularAnimeAllTime[] = [];

	async function fetchPopularAnimeAllTime() {
		try {
			const popular_anime_all_time_response = await fetch(
				'https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=false&limit=10'
			);
			const data = await popular_anime_all_time_response.json();
			popular_anime_all_time = data.data;

			// log the popular_anime_all_time
			console.log(popular_anime_all_time);
		} catch (error) {
			console.error('Error fetching seasonal anime data:', error);
		}
	}

	onMount(() => {
		fetchPopularAnimeAllTime();
	});
</script>

<div class="container">
	<div class="title">
		<h5 class="fw-bold text-primary">Anime Popularity Ranking</h5>
	</div>
	<div class="rankings">
		{#each popular_anime_all_time as anime}
			<RankingCard
				popular_anime_all_time_title={anime.titles[0].title}
				popular_anime_all_time_img={anime.images.jpg.image_url}
				popular_anime_all_time_studio={anime.studios[0].name}
				popular_anime_all_time_ranking={anime.popularity}
			/>
		{/each}
	</div>
</div>

<div class="container">
	<div class="title">
		<h4 class="fw-bold text-primary">Manga Rankings</h4>
	</div>
	<div class="rankings">
		<RankingCard />
	</div>
</div>

<style>
	/* css */
</style>
