// const SEASONAL_ANIME = 'https://api.jikan.moe/v4/seasons/now?limit=5&type=tv';
// const TOP_ANIME_POPULARITY = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=10';
// const TOP_ANIME_FAVORITES = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=favorite&limit=10';
// const RECENT_EPISODES = 'https://api.jikan.moe/v4/watch/episodes';
// const RECOMMENDED_MANGA = 'https://api.jikan.moe/v4/manga?sfw&type=manga&min_score=7.00&max_score=10.00&status=publishing&sfw=true&order_by=popularity&sort=desc';

// export const load = async () => {
//     const fetchSeasonalAnime = async () => {
//         const res = await fetch(SEASONAL_ANIME);
//         const data = await res.json();


//         // console.log(data.data);
//         return data.data;

//     }

//     const fetchTopAnimeByPopularity = async () => {
//         const res = await fetch(TOP_ANIME_POPULARITY);
//         const data = await res.json();

//         return data.data;
//     }

//     const fetchAnimeFavorites = async () => {
//         const res = await fetch(TOP_ANIME_FAVORITES);
//         const data = await res.json();

//         return data.data;
//     }

//     const fetchRecentEpisodes = async () => {
//         const res = await fetch(RECENT_EPISODES);
//         const data = await res.json();

//         return data.data;
//     }

//     const fetchRecommendedManga = async () => {
//         const res = await fetch(RECOMMENDED_MANGA);
//         const data = await res.json();

//         return data.data;
//     }

//     return {
//         seasonal_anime: fetchSeasonalAnime(),
//         top_anime_by_popularity: fetchTopAnimeByPopularity(),
//         recent_episodes: fetchRecentEpisodes(),
//         recommended_manga: fetchRecommendedManga()

//     }
// }