<script lang="ts">
	export let animeTitle: string = 'Jujutsu Kaisen'; // Example title

	let isHovered: boolean = false;

	function toggleHover() {
		isHovered = !isHovered;
	}
</script>

<div class="row row-cols-5">
	<div class="col-md-2 pl-0 pr-0">
		<!-- Added pl-0 and pr-0 classes -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg card-hover"
			style="position: relative; width: 160px; height: 220px; background-image: url('https://cdn.myanimelist.net/images/anime/1792/138022.jpg'); background-size: cover; margin-top: 200%;"
			on:mouseenter={toggleHover}
			on:mouseleave={toggleHover}
		>
			<!-- Gradient Overlay -->
			{#if isHovered}
				<div class="gradient-overlay" />
			{/if}

			<!-- Title Text -->
			<div class="title-text-bottom-left">
				<p style="font-weight: bold;">{animeTitle}</p>
			</div>

			<!-- Description Text (Initially Hidden) -->
			<!-- <div class="description-text">
		            <p>{animeDescription}</p>
		        </div> -->
		</div>
	</div>
	<!-- Add more col-md-2 elements for other cards -->
</div>

<style>
	.col-md-2 {
		flex-basis: calc(20% - 15px); /* Adjusted flex-basis */
		margin-right: 5px; /* Reduced right margin */
		margin-bottom: 1rem;
	}

	.card-hover {
		position: relative;
		overflow: hidden;
		transition: transform 0.3s ease-in-out;
	}

	.card-hover:hover {
		transform: scale(1.05); /* Slight scale increase on hover */
	}

	.card-hover .gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to bottom, transparent, #000000);
		opacity: 0; /* Initial opacity set to 0 */
		transition: opacity 0.3s ease-in-out;
	}

	.card-hover:hover .gradient-overlay,
	.card-hover:hover .title-text-bottom-left {
		opacity: 0.8;
	}

	.title-text-bottom-left {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: white;
		opacity: 0; /* Initial opacity set to 0 */
		transition: opacity 0.3s ease-in-out;
	}
</style>
