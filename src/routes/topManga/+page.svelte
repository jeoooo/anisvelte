<script lang="ts">
	import EnhancedRankingCard from '$lib/components/EnhancedRankingCard.svelte';
	import FilterBar from '$lib/components/FilterBar.svelte';
	import { onMount } from 'svelte';

	let {
		data
	}: {
		data: {
			top_manga: {
				mal_id: number;
				rank: number;
				title: string;
				images: { jpg: { large_image_url: string } };
				score: number;
				scored_by: number;
				type: string;
				volumes: number;
				chapters: number;
				year: number;
				members: number;
				favorites: number;
				status: string;
				genres: Array<{ name: string }>;
			}[];
			pagination: {
				last_visible_page: number;
				has_next_page: boolean;
				current_page: number;
			};
		};
	} = $props();

	let sortBy = $state('rank');
	let contentVisible = $state(false);

	function handleSortChange(value: string) {
		sortBy = value;
	}

	let sortedTopManga = $derived(() => {
		const mangaList = data.top_manga.slice();
		switch (sortBy) {
			case 'rank':
				return mangaList.sort((a, b) => a.rank - b.rank);
			case 'score':
				return mangaList.sort((a, b) => (b.score || 0) - (a.score || 0));
			case 'popularity':
				return mangaList.sort((a, b) => a.rank - b.rank);
			case 'members':
				return mangaList.sort((a, b) => (b.members || 0) - (a.members || 0));
			case 'favorites':
				return mangaList.sort((a, b) => (b.favorites || 0) - (a.favorites || 0));
			default:
				return mangaList.sort((a, b) => a.rank - b.rank);
		}
	});

	onMount(() => {
		setTimeout(() => {
			contentVisible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Top Manga — AniSvelte</title>
</svelte:head>

<div class="bg-[#222] min-h-screen">
	<div class="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 py-6 md:py-10">
		<!-- Header section -->
		<div class="mb-6 md:mb-8">
			<h1
				class="font-black text-3xl md:text-4xl lg:text-5xl mb-2 font-overpass text-white"
			>
				Top Manga
			</h1>
			<p class="text-gray-400 text-sm md:text-base font-overpass font-light">
				The most popular manga ranked by community ratings
			</p>
		</div>

		<!-- Filter bar -->
		<FilterBar media_type="manga" sortBy={sortBy} onSortChange={handleSortChange} />

		<!-- Manga list -->
		<div class="flex flex-col gap-3 md:gap-4">
			{#each sortedTopManga() as manga, index}
				<a
					href="/manga/{manga.mal_id}"
					class="block"
					style="animation-delay: {index * 50}ms"
					class:animate-fade-in-up={contentVisible}
				>
					<EnhancedRankingCard
						media_type="manga"
						rank={manga.rank}
						title={manga.title}
						image_url={manga.images.jpg.large_image_url}
						score={manga.score}
						scored_by={manga.scored_by}
						type={manga.type}
						year={manga.year}
						volumes={manga.volumes}
						chapters={manga.chapters}
						members={manga.members}
						favorites={manga.favorites}
						status={manga.status}
						genres={manga.genres}
					/>
				</a>
			{/each}
		</div>

		<!-- Pagination info -->
		{#if data.pagination}
			<div class="mt-8 text-center">
				<p class="text-gray-500 text-sm font-overpass">
					Page {data.pagination.current_page} of {data.pagination.last_visible_page}
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up {
		animation: fadeInUp 0.5s ease-out forwards;
	}
</style>
