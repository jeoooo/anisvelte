import type { Load } from '@sveltejs/kit';

export const load: Load = ({ params }) => {
	// Extract mal_id from params
	const { mal_id } = params;

	// Template the mal_id into the anime URL
	const ANIME_URL = `https://api.jikan.moe/v4/anime/${mal_id}/full`;

	console.log(ANIME_URL);

	// Return the mal_id to be used in the component
	return {
		props: {
			mal_id
		}
	};
};

// Cache to store fetched data

// Define the load function
// export const load = async () => {
// 	const fetchWithoutCache = async (url: string) => {
// 		try {
// 			const response = await fetch(url);

// 			if (!response.ok) {
// 				throw new Error(`Failed to fetch data from ${url}. Status: ${response.status}`);
// 			}

// 			const data = await response.json();
// 			return data;
// 		} catch (error: any) {
// 			console.error(`Error fetching data from ${url}:`, error.message);
// 			throw error;
// 		}
// 	};

// 	try {
// 		const fetchTopAnime = fetchWithoutCache(TOP_ANIME);

// 		const [topAnime] = await Promise.all([fetchTopAnime]);

// 		return {
// 			top_anime: topAnime.data
// 		};
// 	} catch (error: any) {
// 		console.error('Error in load function:', error.message);
// 		throw error;
// 	}
