// import { PageServerLoad } from "./$types";


const SEASONAL_ANIME = 'https://api.jikan.moe/v4/seasons/now?limit=10&type=tv';
const TOP_ANIME_POPULARITY = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=10';
const TOP_ANIME_FAVORITES = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=favorite&limit=10';
const RECENT_EPISODES = 'https://api.jikan.moe/v4/watch/episodes';
const RECOMMENDED_MANGA = 'https://api.jikan.moe/v4/manga?sfw&type=manga&min_score=7.00&max_score=10.00&status=publishing&sfw=true&order_by=popularity&sort=desc';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const fetchSeasonalAnime = fetch(SEASONAL_ANIME).then(res => res.json());
    const fetchTopAnimeByPopularity = fetch(TOP_ANIME_POPULARITY).then(res => res.json());
    const fetchRecentEpisodes = fetch(RECENT_EPISODES).then(res => res.json());

    const [seasonalAnimeData, topAnimeByPopularityData, recentEpisodesData] = await Promise.all([
        fetchSeasonalAnime,
        fetchTopAnimeByPopularity,
        fetchRecentEpisodes,
    ]);

    return {
        seasonal_anime: seasonalAnimeData.data,
        top_anime_by_popularity: topAnimeByPopularityData.data,
        recent_episodes: recentEpisodesData.data,
    };
}
