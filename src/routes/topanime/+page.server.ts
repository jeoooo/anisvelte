const TOP_ANIME = 'https://api.jikan.moe/v4/top/anime?="tv"&="bypopularity"&sfw=true&limit=10';
// const UPCOMING_ANIME = 'https://api.jikan.moe/v4/seasons/upcoming';

// Cache to store fetched data

// Define the load function
export const load = async () => {
	const fetchWithoutCache = async (url: string) => {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch data from ${url}. Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error: any) {
			console.error(`Error fetching data from ${url}:`, error.message);
			throw error;
		}
	};

	try {
		const fetchTopAnime = fetchWithoutCache(TOP_ANIME);

		const [topAnime] = await Promise.all([fetchTopAnime]);

		return {
			top_anime: topAnime.data
		};
	} catch (error: any) {
		console.error('Error in load function:', error.message);
		throw error;
	}
};
