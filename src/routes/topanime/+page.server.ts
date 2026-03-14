import { fetchWithCache, JIKAN_URLS } from '$lib/api';

export const load = async () => {
	const data = await fetchWithCache(JIKAN_URLS.TOP_ANIME);
	return { top_anime: data.data };
};
