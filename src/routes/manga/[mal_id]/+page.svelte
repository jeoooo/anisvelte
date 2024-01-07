<!--
# Documentation

## Page Overview

This Svelte page appears to be a detailed presentation of information about a TV show, possibly an anime. The layout is structured with a combination of HTML and Tailwind CSS classes.

## Structure

The page is divided into several sections:

1. **Title Section:**
   - Displays the main title of the TV show in a prominent style.
   
2. **Information Section:**
   - Provides details about the TV show, including alternative titles, type, episodes, status, aired dates, premiered date, broadcast information, producers, licensors, studios, source, genres, theme, demographic, duration, and rating.

3. **Statistics Section:**
   - Presents statistical information about the TV show, such as score, ranking, popularity, number of members, and favorites.

4. **Score Section:**
   - Displays the score of the TV show along with its ranking and popularity.

5. **Synopsis Section:**
   - Contains a brief overview of the TV show's plot and characters.

6. **Background Section:**
   - Provides background information, mentioning the release details of Spy x Family Season 2 on Blu-ray and DVD.

7. **Trailer Section:**
   - Embeds a YouTube trailer using the 'svelte-youtube-embed' component.

## Usage of External Components

- Utilizes the 'svelte-youtube-embed' component to embed a YouTube trailer.

## Styles

- Applies various Tailwind CSS classes to style the page, providing a visually appealing and responsive layout.

## Responsive Design

- The design appears to be responsive, as it uses Flexbox and responsive width units to adapt to different screen sizes.

## Instructions

To generate documentation for this page, follow these steps:

1. Review the code structure and understand the purpose of each section.
2. Document the purpose and usage of external components.
3. Describe the styling approach, mentioning the Tailwind CSS classes used.
4. Highlight any responsive design features observed in the code.

-->

<script lang="ts">
	import { DateFormatter } from '$lib/utils/DateFormatter.js';
	import { NumberFormatter } from '$lib/utils/NumberFormatter';
	import { StringFormatter } from '$lib/utils/StringFormatter.js';
	import Youtube from 'svelte-youtube-embed';
	export let data;
	const { manga_data } = data;
	// console.log(manga_data.data.images.jpg.large_image_url);
</script>

<svelte:head>
	<title>{manga_data.data.titles[0].title}</title>
</svelte:head>

<div class="bg-[#222222] flex flex-col items-center">
	<div
		class="bg-[#2e2e2e] flex flex-col mx-44 my-8 h-auto w-auto border border-gray-200 rounded-lg shadow"
	>
		<h1 class="text-5xl text-white font-overpass font-black border-b-2 my-6 mx-3">
			{manga_data.data.titles[0].title}
		</h1>
		<div class="flex flex-row">
			<div class="flex flex-col px-3 border-r-2 my-3 w-[300px]">
				<img src={manga_data.data.images.jpg.image_url} alt="" srcset="" class="max-w-min" />
				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">
					Alternative Titles
				</h2>
				<h2 class="text-xs text-white font-overpass font-light mt-2">
					{StringFormatter.arrayformatItems(manga_data.data.titles ?? '???')}
				</h2>

				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">Information</h2>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Type: {manga_data.data.type ?? '???'}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Episodes: {manga_data.data.chapters}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Status: {manga_data.data.status}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Publish Date: {DateFormatter.formatDate(manga_data.data.published.from) ?? '???'} - {DateFormatter.formatDate(
						manga_data.data.published.to
					) ?? '???'}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">Premiered: Fall 2023</p>
				{#if manga_data.data.broadcast && manga_data.data.broadcast.day && manga_data.data.broadcast.time && manga_data.data.broadcast.timezone}
					<p class="text-xs text-white font-overpass font-light mt-2">
						Broadcast: {manga_data.data.broadcast.day} at {manga_data.data.broadcast.time} ({manga_data
							.data.broadcast.timezone})
					</p>
				{:else}
					<p class="text-xs text-white font-overpass font-light mt-2">Broadcast: TBA</p>
				{/if}
				<p class="text-xs text-white font-overpass font-light mt-2">
					Genres: {StringFormatter.formatItems(manga_data.data.genres ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Theme: {StringFormatter.formatItems(manga_data.data.themes ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Demographic: {StringFormatter.formatItems(manga_data.data.demographics ?? 'TBA')}
				</p>
				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">Statistics</h2>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Score: {manga_data.data.score ?? 'TBD'} (scored by {NumberFormatter.formatWithCommas(
						manga_data.data.scored_by ?? 'MAL'
					)} users)
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Ranked: #{NumberFormatter.formatWithCommas(manga_data.data.rank ?? 'TBD')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Popularity: #{NumberFormatter.formatWithCommas(manga_data.data.popularity ?? 'TBD')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Members: {NumberFormatter.formatWithCommas(manga_data.data.members ?? 'TBD')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Favorites: {NumberFormatter.formatWithCommas(manga_data.data.favorites ?? 'TBD')}
				</p>
			</div>

			<div class="flex flex-col">
				<div class="bg-[#2e51a2] m-3 rounded-lg flex flex-row border border-white">
					<div class="flex flex-col">
						<div class=" w-fit h-fit border-r-2 my-2">
							<h2 class="text-2xl text-white font-overpass m-3 p-2">Score</h2>
							<h2 class="text-2xl text-white font-overpass font-black mx-3 m-3 p-2">
								{manga_data.data.score ?? 'TBD'}
							</h2>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<h2 class="text-xl text-white font-overpass font-extrabold m-3">
							Ranked #{NumberFormatter.formatWithCommas(manga_data.data.rank ?? 'TBD')} Popularity #{NumberFormatter.formatWithCommas(
								manga_data.data.popularity ?? 'TBD'
							)} Members {NumberFormatter.formatWithCommas(manga_data.data.members ?? 'TBD')}
						</h2>
					</div>
				</div>

				<h2 class=" text-xl text-white font-overpass font-bold m-3 border-b-2">Synopsis</h2>
				<p class=" text-s text-white font-overpass m-3 indent-8 text-justify">
					{manga_data.data.synopsis ?? 'TBA'}
				</p>
			</div>
		</div>
	</div>
</div>
