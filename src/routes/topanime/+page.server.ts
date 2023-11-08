const TOP_ANIME = 'https://api.jikan.moe/v4/top/anime?="tv"&="bypopularity"&sfw=true&limit=10';
// const UPCOMING_ANIME = 'https://api.jikan.moe/v4/seasons/upcoming';

// Cache to store fetched data
const cache: { [url: string]: any } = {};

// Define the load function
export const load = async () => {
	const fetchWithCache = async (url: string) => {
		try {
			if (cache[url]) {
				return cache[url];
			}

			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch data from ${url}. Status: ${response.status}`);
			}

			const data = await response.json();

			// Cache the data
			cache[url] = data;
			return data;
		} catch (error: any) {
			console.error(`Error fetching data from ${url}:`, error.message);
			throw error;
		}
	};

	try {
		const fetchTopAnime = fetchWithCache(TOP_ANIME);
		// const fetchUpcomingAnime = fetchWithCache(UPCOMING_ANIME);

		const [topAnime] = await Promise.all([
			fetchTopAnime
			// fetchUpcomingAnime
		]);

		return {
			top_anime: topAnime.data
			// upcoming_anime: upcomingAnimeData.data
		};
	} catch (error: any) {
		console.error('Error in load function:', error.message);
		throw error;
	}
};
