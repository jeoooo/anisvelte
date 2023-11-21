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
	import Youtube from 'svelte-youtube-embed';
</script>

<div class="bg-[#222222] flex flex-col items-center">
	<div
		class="bg-[#2e2e2e] flex flex-col mx-44 my-8 h-auto w-fit border border-gray-200 rounded-lg shadow"
	>
		<h1 class="text-5xl text-white font-overpass font-black border-b-2 my-6 mx-3">Title</h1>
		<div class="flex flex-row">
			<div class="flex flex-col px-3 border-r-2 my-3 w-[1000px]">
				<img src="https://placehold.co/225x350?" alt="" srcset="" class=" " />
				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">
					Alternative Titles
				</h2>
				<h2 class="text-md text-white font-overpass font-light mt-2">Alternative Title #1</h2>
				<h2 class="text-md text-white font-overpass font-light mt-2">Alternative Title #2</h2>
				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">Information</h2>
				<p class="text-s text-white font-overpass font-light mt-2">Type: TV</p>
				<p class="text-s text-white font-overpass font-light mt-2">Episodes: 12</p>
				<p class="text-s text-white font-overpass font-light mt-2">Status: Currently Airing</p>
				<p class="text-s text-white font-overpass font-light mt-2">Aired: Oct 7, 2023 to ?</p>
				<p class="text-s text-white font-overpass font-light mt-2">Premiered: Fall 2023</p>
				<p class="text-s text-white font-overpass font-light mt-2">
					Broadcast: Saturdays at 23:00 (JST)
				</p>
				<p class="text-s text-white font-overpass font-light mt-2">
					Producers: TV Tokyo, Shogakukan-Shueisha Productions, TOHO animation, Shueisha
				</p>
				<p class="text-s text-white font-overpass font-light mt-2">
					Licensors: None found, add some
				</p>
				<p class="text-s text-white font-overpass font-light mt-2">
					Studios: Wit Studio, CloverWorks
				</p>
				<p class="text-s text-white font-overpass font-light mt-2">Source: Manga</p>
				<p class="text-s text-white font-overpass font-light mt-2">Genres: Action, Comedy</p>
				<p class="text-s text-white font-overpass font-light mt-2">Theme: Childcare</p>
				<p class="text-s text-white font-overpass font-light mt-2">Demographic: Shounen</p>
				<p class="text-s text-white font-overpass font-light mt-2">Duration: 23 min. per ep.</p>
				<p class="text-s text-white font-overpass font-light mt-2">
					Rating: PG-13 - Teens 13 or older
				</p>

				<h2 class="text-xl text-white font-overpass font-bold mt-2 border-b-2">Statistics</h2>
				<p class="text-s text-white font-overpass font-light mt-2">
					Score: 8.181 (scored by 35,817 users)
				</p>
				<p class="text-s text-white font-overpass font-light mt-2">Ranked: #3742</p>
				<p class="text-s text-white font-overpass font-light mt-2">Popularity: #675</p>
				<p class="text-s text-white font-overpass font-light mt-2">Members: 335,971</p>
				<p class="text-s text-white font-overpass font-light mt-2">Favorites: 2,227</p>
			</div>

			<div class="flex flex-col">
				<div class="bg-[#2e51a2] m-3 rounded-lg flex flex-row border border-white">
					<div class="flex flex-col">
						<div class=" w-fit h-fit border-r-2 my-2">
							<h2 class="text-2xl text-white font-overpass m-3 p-2">Score</h2>
							<h2 class="text-2xl text-white font-overpass font-black mx-3 mb-3 p-2">10.00</h2>
						</div>
					</div>
					<div class="flex flex-row items-center">
						<h2 class="text-xl text-white font-overpass font-extrabold m-3">
							Ranked #374 Popularity #675 Members 335,971
						</h2>
					</div>
				</div>

				<h2 class=" text-xl text-white font-overpass font-bold m-3 border-b-2">Synopsis</h2>
				<p class=" text-s text-white font-overpass m-3">
					With her ability to read minds, Anya Forger is the only one who knows the true identities
					of her unconventional family. Her pretend father Loid operates as an elite spy code-named
					Twilight; her mother Yor kills on demand as the assassin Thorn Princess; and their dog,
					Bond, possesses the gift of precognition. Although they hide the truth from each other,
					this pretense of a perfectly ordinary family provides Anya with the genuine love and
					warmth that she longed for as an orphan.
				</p>
				<p class=" text-s text-white font-overpass m-3">
					Operation Strix—Loid's special mission to avoid potential war by gathering vital
					information and getting close to the powerful political figure, Donovan Desmond—is only
					possible if Anya plays her part right. She can either excel academically and become an
					Imperial Scholar at her prestigious school or make friends with Donovan's son, Damian.
					Neither is exactly easy, but with her adventurous attitude, Anya throws herself
					wholeheartedly into her mission as a Forger—all for the sake of international peace.
				</p>
				<h2 class=" text-xl text-white font-overpass font-bold m-3 border-b-2">Background</h2>
				<p class=" text-s text-white font-overpass m-3">
					Spy x Family Season 2 was released on Blu-ray and DVD in three volumes from December 20,
					2023, to April 17, 2024.
				</p>
				<h2 class=" text-xl text-white font-overpass font-bold m-3 border-b-2">Trailer</h2>
				<div class="m-3"><Youtube id="q2Y3f0lHnMs" /></div>
			</div>
		</div>
	</div>
</div>
