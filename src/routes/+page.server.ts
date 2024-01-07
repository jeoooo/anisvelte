import type { PageServerLoad } from './$types';

const SEASONAL_ANIME = 'https://api.jikan.moe/v4/seasons/now?=sfw&=tv';
const UPCOMING_ANIME = 'https://api.jikan.moe/v4/seasons/upcoming';

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
		const fetchSeasonalAnime = fetchWithCache(SEASONAL_ANIME);
		const fetchUpcomingAnime = fetchWithCache(UPCOMING_ANIME);

		const [seasonalAnimeData, upcomingAnimeData] = await Promise.all([
			fetchSeasonalAnime,
			fetchUpcomingAnime
		]);

		return {
			seasonal_anime: seasonalAnimeData.data,
			upcoming_anime: upcomingAnimeData.data
		};
	} catch (error: any) {
		console.error('Error in load function:', error.message);
		throw error;
	}
};
