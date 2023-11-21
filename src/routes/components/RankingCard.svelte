<script lang="ts">
	import { NumberFormatter } from '$lib/utils/NumberFormatter';

	export let rank: number = 1;
	export let title: string = 'title';
	export let image_url: string = 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg';
	export let score: number = 4.5;
	export let scored_by: number = 12345;
	export let type: string = 'anime';
</script>

{#if type == 'anime'}
	<div class="bg-slate-700 w-auto h-64 rounded-md m-3">
		<div class="flex flex-row">
			<div class="flex w-36 h-64">
				<!-- Set a fixed width, e.g., w-24 (adjust as needed) -->
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover rounded-l-md w-full h-64 p-0"
				/>
			</div>

			<div class="relative">
				<p class="text-white p-3 text-xl font-bold">#{rank} {title}</p>

				<!-- This paragraph will be placed at the bottom -->
				<div class="absolute bottom-0 text-white text-l p-3">
					<div class="flex flex-row">
						<i class="fa-solid fa-star text-yellow-400 m-1" />
						{score}
						<i class="fa-solid fa-comment text-yellow-400 m-1" />
						{NumberFormatter.formatWithCommas(scored_by)}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else if type == 'manga'}
	<div class="bg-slate-700 w-auto h-64 rounded-md m-3">
		<div class="flex flex-row">
			<div class="flex w-36 h-64">
				<!-- Set a fixed width, e.g., w-24 (adjust as needed) -->
				<img
					src={image_url}
					alt=""
					class="saturate-150 object-cover rounded-l-md w-full h-64 p-0"
				/>
			</div>

			<div class="relative">
				<p class="text-white p-3 text-xl font-bold">#{rank} {title}</p>

				<!-- This paragraph will be placed at the bottom -->
				<div class="absolute bottom-0 text-white text-l p-3">
					<div class="flex flex-row">
						<i class="fa-solid fa-star text-yellow-400 m-1" />
						{score}
						<i class="fa-solid fa-comment text-yellow-400 m-1" />
						{NumberFormatter.formatWithCommas(scored_by)}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
