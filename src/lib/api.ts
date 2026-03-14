const TTL_MS = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
	data: unknown;
	timestamp: number;
}

const cache: Record<string, CacheEntry> = {};

export async function fetchWithCache(url: string): Promise<any> {
	const now = Date.now();
	const entry = cache[url];

	if (entry && now - entry.timestamp < TTL_MS) {
		return entry.data;
	}

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Jikan API error ${response.status} for ${url}`);
	}

	const data = await response.json();
	cache[url] = { data, timestamp: now };
	return data;
}

export const JIKAN_URLS = {
	SEASONAL_ANIME: 'https://api.jikan.moe/v4/seasons/now?sfw=true&type=tv',
	UPCOMING_ANIME: 'https://api.jikan.moe/v4/seasons/upcoming?sfw=true',
	TOP_ANIME: 'https://api.jikan.moe/v4/top/anime?type=tv&limit=25',
	TOP_MANGA: 'https://api.jikan.moe/v4/top/manga?type=manga&limit=25',
} as const;
