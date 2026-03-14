import { fetchWithCache, JIKAN_URLS } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [seasonalData, upcomingData] = await Promise.all([
		fetchWithCache(JIKAN_URLS.SEASONAL_ANIME),
		fetchWithCache(JIKAN_URLS.UPCOMING_ANIME),
	]);

	return {
		seasonal_anime: seasonalData.data,
		upcoming_anime: upcomingData.data,
	};
};
