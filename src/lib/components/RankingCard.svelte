<script lang="ts">
	import { NumberFormatter } from '$lib/utils/NumberFormatter';

	let {
		title = 'title',
		image_url = 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg',
		score = 4.5,
		scored_by = 12345,
		type = 'anime'
	}: {
		title?: string;
		image_url?: string;
		score?: number;
		scored_by?: number;
		type?: string;
	} = $props();
</script>

{#if type == 'anime'}
	<div class="bg-zinc-700 w-auto h-64 rounded-md m-3 shadow-2xl">
		<div class="flex flex-row">
			<div class="flex w-36 h-64">
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover rounded-l-md w-full h-64 p-0"
				/>
			</div>

			<div class="relative">
				<p class="text-white p-3 text-xl font-bold font-overpass">{title}</p>

				<div class="absolute bottom-0 text-white text-l p-3">
					<div class="flex flex-row font-overpass font-light">
						<i class="fa-solid fa-star text-yellow-400 m-1"></i>
						{score}
						<i class="fa-solid fa-comment text-yellow-400 m-1"></i>
						{NumberFormatter.formatWithCommas(scored_by)}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else if type == 'manga'}
	<div class="bg-zinc-700 w-auto h-64 rounded-md m-3 shadow-2xl">
		<div class="flex flex-row">
			<div class="flex w-36 h-64">
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover rounded-l-md w-full h-64 p-0"
				/>
			</div>

			<div class="relative">
				<p class="text-white p-3 text-xl font-bold font-overpass">{title}</p>

				<div class="absolute bottom-0 text-white text-l p-3">
					<div class="flex flex-row font-overpass font-light">
						<i class="fa-solid fa-star text-yellow-400 m-1"></i>
						{score}
						<i class="fa-solid fa-comment text-yellow-400 m-1"></i>
						{NumberFormatter.formatWithCommas(scored_by)}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
