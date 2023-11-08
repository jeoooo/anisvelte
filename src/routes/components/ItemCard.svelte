<script lang="ts">
	// your script goes here
	export let rank: number = 111;
	export let image_url: string = 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg';
	export let title: string = 'title';
	export let score: number = 4.5;
	export let scored_by: number = 12345;
	export let type: string = 'seasonal';
</script>

{#if type == 'seasonal'}
	<div class="flex flex-col h-auto w-fit rounded-md">
		<div
			class="flex flex-col w-fit rounded-t-md relative hover:scale-105 transition-transform duration-300 ease-in-out"
		>
			<div class="relative">
				<div class="absolute m-2 bg-slate-600 opacity-80 rounded-md w-fit">
					<h3 class=" text-white p-2">#{rank}</h3>
				</div>
				<!-- Actual image -->
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover rounded-md w-[220px] h-[300px]"
				/>

				<!-- Opaque overlay with information below the image -->
				<div
					class="absolute inset-x-0 bottom-0 bg-slate-800 opacity-80 rounded-b-md flex flex-row items-center p-2"
				>
					<i class="fa-solid fa-star text-yellow-400 mr-1" />
					<p class="flex-grow text-white">{score}</p>
					<i class="fa-solid fa-comment text-yellow-400 mr-1" />
					<p class="text-white">{scored_by}</p>
				</div>
			</div>
		</div>
		<div class="flex w-52">
			<h1 class=" p-2 text-l text-white truncate text-ellipsis">{title}</h1>
		</div>
	</div>
{:else if type == 'upcoming'}
	<div class="flex flex-col h-auto w-fit rounded-md">
		<div
			class="flex flex-col w-fit rounded-t-md relative hover:scale-105 transition-transform duration-300 ease-in-out"
		>
			<div class="relative">
				<!-- <div class="absolute m-2 bg-slate-600 opacity-80 rounded-md w-fit">
				<h3 class=" text-white p-2">#{rank}</h3>
			</div> -->
				<!-- Actual image -->
				<img src={image_url} alt="" class="saturate-150 rounded-md w-[220px] h-[300px]" />

				<!-- Opaque overlay with information below the image -->
				<!-- <div
				class="absolute inset-x-0 bottom-0 bg-slate-800 opacity-80 rounded-b-md flex flex-row items-center p-2"
			>
				<i class="fa-solid fa-star text-yellow-400 mr-1" />
				<p class="flex-grow text-white">{score}</p>
				<i class="fa-solid fa-comment text-yellow-400 mr-1" />
				<p class="text-white">{scored_by}</p>
			</div> -->
			</div>
		</div>
		<div class="flex w-52">
			<h1 class=" p-2 text-l text-white truncate text-ellipsis">{title}</h1>
		</div>
	</div>
{/if}
