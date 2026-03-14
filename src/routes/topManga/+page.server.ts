import { fetchWithCache, JIKAN_URLS } from '$lib/api';

export const load = async () => {
	const data = await fetchWithCache(JIKAN_URLS.TOP_MANGA);
	return { top_manga: data.data };
};
