// import { PageServerLoad } from "./$types";


const SEASONAL_ANIME = 'https://api.jikan.moe/v4/seasons/now?limit=20&type=tv';
const TOP_ANIME_POPULARITY = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=10';
const TOP_MANGA = 'https://api.jikan.moe/v4/top/manga?limit=9&type=manga&filter=bypopularity';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const fetchSeasonalAnime = fetch(SEASONAL_ANIME, { cache: 'force-cache', }).then(res => res.json());
    const fetchTopAnimeByPopularity = fetch(TOP_ANIME_POPULARITY, { cache: 'force-cache', }).then(res => res.json());
    const fetchTopManga = fetch(TOP_MANGA, { cache: 'force-cache', }).then(res => res.json());
    // const fetchRecentEpisodes = fetch(RECENT_EPISODES, ).then(res => res.json());
    // const fetchRecommendedManga = fetch(RECOMMENDED_MANGA, { cache: 'force-cache', }).then(res => res.json());

    const [seasonalAnimeData, topAnimeByPopularityData, topMangaData] = await Promise.all([
        fetchSeasonalAnime,
        fetchTopAnimeByPopularity,
        fetchTopManga,


    ]);



    // console.log(topMangaData);
    return {
        seasonal_anime: seasonalAnimeData.data,
        top_anime_by_popularity: topAnimeByPopularityData.data,
        top_manga: topMangaData.data,
        // recent_episodes: recentEpisodesData.data,
        // recommended_manga: recommendedMangaData.data
    };
}
