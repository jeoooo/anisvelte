import { fetchWithCache } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
	const apiUrl = `https://api.jikan.moe/v4/top/anime?type=tv&limit=25&page=${page}`;
	const data = await fetchWithCache(apiUrl);
	return {
		top_anime: data.data,
		pagination: data.pagination as {
			last_visible_page: number;
			has_next_page: boolean;
			current_page: number;
		}
	};
};
