<script lang="ts">
	// default values if null
	export let title: string = 'Anime Title';
	export let image: string = 'https://cdn.myanimelist.net/images/anime/1792/138022.jpg';
	export let isLoaded: boolean = false; // Add a prop to track whether the card is loaded

	// When the card is mounted, set isLoaded to true
	import { onMount } from 'svelte';
	onMount(() => {
		isLoaded = true;
	});
</script>

<div class="card-container">
	<div class="card" class:loaded={isLoaded}>
		<!-- optional fallback -->
		<img src={image} class="card-img" alt={title} />

		<div class="gradient-overlay">
			<div class="card-title-overlay d-flex flex-column justify-content-end">
				<!-- optional fallback -->
				<h6 class="card-title">{title}</h6>
			</div>
		</div>
	</div>
</div>

<style>
	.card-container {
		width: 187.5px;
		height: 260.4px;
		margin: 4px;
	}

	.card {
		position: relative;
		transition: transform 0.3s, opacity 0.5s; /* Add opacity transition */
		width: 100%;
		height: 100%;
		border-radius: 10px;
		overflow: hidden;
		opacity: 0; /* Initially set opacity to 0 */
	}

	.card.loaded {
		opacity: 1; /* When loaded, set opacity to 1 */
	}

	.card:hover {
		transform: scale(1.05);
	}

	.gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, transparent, black);
		opacity: 0.7;
		z-index: 1;
		border-radius: 10px;
	}

	.card-img {
		position: relative;
		z-index: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	.card-title-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	.card-title {
		opacity: 1;
		transition: opacity 0.3s;
		padding: 0px;
		padding-left: 10px;
		padding-bottom: 4px;
		border-radius: 0 0 15px 15px;
		color: white;
	}

	.card:hover .card-title {
		opacity: 1;
	}
</style>
