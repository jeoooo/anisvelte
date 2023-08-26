<!-- <script lang="ts">
	import type IndexCard from './IndexCard.svelte';

	export let slides: IndexCard[];

	let activeIndex = 0;

	function nextSlide() {
		activeIndex = (activeIndex + 1) % slides.length;
	}

	function prevSlide() {
		activeIndex = (activeIndex - 1 + slides.length) % slides.length;
	}
</script>

<div class="carousel slide" id="carouselExample">
	<div class="carousel-inner">
		{#each slides as slide, index}
			<div class="carousel-item {index === activeIndex ? 'active' : ''}">
				{slide}
			</div>
		{/each}
	</div>
	<button class="carousel-control-prev" type="button" on:click={prevSlide}>
		<span class="carousel-control-prev-icon" aria-hidden="true" />
		<span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next" type="button" on:click={nextSlide}>
		<span class="carousel-control-next-icon" aria-hidden="true" />
		<span class="visually-hidden">Next</span>
	</button>
</div>

<style lang="scss">
	.carousel {
		position: relative;

		.carousel-inner {
			display: flex;
			flex-wrap: nowrap;

			.carousel-item {
				flex: 0 0 100%;
				transition: transform 0.3s ease-in-out;
			}

			& .active {
				transform: translateX(-#{activeIndex * 100}%);
			}
		}
	}
</style> -->
