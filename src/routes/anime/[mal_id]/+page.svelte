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
	const { anime_data } = data;
	// console.log(anime_data.data.images.jpg.large_image_url);
</script>

<svelte:head>
	<title>{anime_data.data.titles[0].title}</title>
</svelte:head>

<div class="bg-[#222222] flex flex-col items-center">
	<div
		class="bg-[#2e2e2e] flex flex-col mx-44 my-8 h-auto w-auto border border-gray-200 rounded-lg shadow"
	>
		<h1 class="text-5xl text-white font-overpass font-black border-b-2 my-6 mx-3">
			{anime_data.data.titles[0].title}
		</h1>
		<div class="flex flex-row">
			<div class="flex flex-col px-3 border-r-2 my-3 w-[300px]">
				<img src={anime_data.data.images.jpg.image_url} alt="" srcset="" class="max-w-min" />
				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">
					Alternative Titles
				</h2>
				<h2 class="text-xs text-white font-overpass font-light mt-2">
					{StringFormatter.arrayformatItems(anime_data.data.titles ?? '???')}
				</h2>

				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">Information</h2>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Type: {anime_data.data.type ?? '???'}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Episodes: {anime_data.data.episodes}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Status: {anime_data.data.status}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Aired: {DateFormatter.formatDate(anime_data.data.aired.from) ?? '???'} to {DateFormatter.formatDate(
						anime_data.data.aired.to
					) ?? '???'}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">Premiered: Fall 2023</p>
				{#if anime_data.data.broadcast && anime_data.data.broadcast.day && anime_data.data.broadcast.time && anime_data.data.broadcast.timezone}
					<p class="text-xs text-white font-overpass font-light mt-2">
						Broadcast: {anime_data.data.broadcast.day} at {anime_data.data.broadcast.time} ({anime_data
							.data.broadcast.timezone})
					</p>
				{:else}
					<p class="text-xs text-white font-overpass font-light mt-2">Broadcast: TBA</p>
				{/if}
				<p class="text-xs text-white font-overpass font-light mt-2">
					Producers: {StringFormatter.formatItems(anime_data.data.producers ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Licensors: {StringFormatter.formatItems(anime_data.data.licensors ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Studios:
					{StringFormatter.formatItems(anime_data.data.studios ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Source: {anime_data.data.source ?? '???'}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Genres: {StringFormatter.formatItems(anime_data.data.genres ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Theme: {StringFormatter.formatItems(anime_data.data.themes ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Demographic: {StringFormatter.formatItems(anime_data.data.demographics ?? 'TBA')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Duration: {anime_data.data.duration ?? 'TBA'}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Rating: {anime_data.data.rating ?? '???'}
				</p>

				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">Statistics</h2>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Score: {anime_data.data.score ?? 'TBD'} (scored by {NumberFormatter.formatWithCommas(
						anime_data.data.scored_by ?? 'MAL'
					)} users)
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Ranked: #{NumberFormatter.formatWithCommas(anime_data.data.rank ?? 'TBD')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Popularity: #{NumberFormatter.formatWithCommas(anime_data.data.popularity ?? 'TBD')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Members: {NumberFormatter.formatWithCommas(anime_data.data.members ?? 'TBD')}
				</p>
				<p class="text-xs text-white font-overpass font-light mt-2">
					Favorites: {NumberFormatter.formatWithCommas(anime_data.data.favorites ?? 'TBD')}
				</p>
			</div>

			<div class="flex flex-col">
				<div class="bg-[#2e51a2] m-3 rounded-lg flex flex-row border border-white">
					<div class="flex flex-col">
						<div class=" w-fit h-fit border-r-2 my-2">
							<h2 class="text-2xl text-white font-overpass m-3 p-2">Score</h2>
							<h2 class="text-2xl text-white font-overpass font-black mx-3 m-3 p-2">
								{anime_data.data.score ?? 'TBD'}
							</h2>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<h2 class="text-xl text-white font-overpass font-extrabold m-3">
							Ranked #{NumberFormatter.formatWithCommas(anime_data.data.rank ?? 'TBD')} Popularity #{NumberFormatter.formatWithCommas(
								anime_data.data.popularity ?? 'TBD'
							)} Members {NumberFormatter.formatWithCommas(anime_data.data.members ?? 'TBD')}
						</h2>
					</div>
				</div>

				<h2 class=" text-xl text-white font-overpass font-bold m-3 border-b-2">Synopsis</h2>
				<p class=" text-s text-white font-overpass m-3 indent-8 text-justify">
					{anime_data.data.synopsis ?? 'TBA'}
				</p>

				<h2 class=" text-xl text-white font-overpass font-bold m-3 border-b-2">Trailer</h2>
				{#if anime_data.data.trailer && anime_data.data.trailer.youtube_id}
					<div class="m-3">
						<Youtube id={anime_data.data.trailer.youtube_id} />
					</div>
				{:else}
					<p class=" text-s text-white font-overpass m-3 indent-8 text-justify">
						No trailers found
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
