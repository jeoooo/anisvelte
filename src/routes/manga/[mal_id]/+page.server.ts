import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	// Extract mal_id from params
	const { mal_id } = params;

	// Template the mal_id into the anime URL
	const ANIME_URL = `https://api.jikan.moe/v4/anime/${mal_id}/full`;

	console.log(`API: ${ANIME_URL}`);

	try {
		const response = await fetch(ANIME_URL);

		if (!response.ok) {
			throw new Error(`Failed to fetch data from ${ANIME_URL}. Status: ${response.status}`);
		}

		const data = await response.json();

		// console.log(data); // Do something with the fetched data

		return {
			// Return the fetched data or any other necessary data
			anime_data: data
		};
	} catch (error: any) {
		console.error(`Error fetching data from ${ANIME_URL}:`, error.message);
		throw error;
	}
};
