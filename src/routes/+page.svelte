<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import IndexCard from '$lib/components/IndexCard.svelte';
</script>

<!-- <Hero /> -->

<div class="container border border-primary mt-3">
	<div class="row border border-primary">
		<h2 class="pb-2 border-bottom text-primary">Summer 2023 Anime</h2>
	</div>
	<div class="row border border-primary">
		<div
			class="col border border-primary d-flex justify-content-center align-items-center pl-0 pr-0"
		>
			<IndexCard />
		</div>
		<div
			class="col border border-primary d-flex justify-content-center align-items-center pl-0 pr-0"
		>
			<IndexCard />
		</div>
		<div
			class="col border border-primary d-flex justify-content-center align-items-center pl-0 pr-0"
		>
			<IndexCard />
		</div>
		<div
			class="col border border-primary d-flex justify-content-center align-items-center pl-0 pr-0"
		>
			<IndexCard />
		</div>
		<div
			class="col border border-primary d-flex justify-content-center align-items-center pl-0 pr-0"
		>
			<IndexCard />
		</div>
		<div
			class="col border border-primary d-flex justify-content-center align-items-center pl-0 pr-0"
		>
			<IndexCard />
		</div>
	</div>
</div>

<!-- <div class="container column col-lg-7 px-4 py-5" id="custom-cards">
	<h2 class="pb-2 border-bottom text-primary">Summer 2023 Anime</h2>
	<div class="d-flex flex-wrap justify-content-between">
		<IndexCard />
		<IndexCard />
		<IndexCard />
		<IndexCard />
		<IndexCard />
	</div>
</div> -->
