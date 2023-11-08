<script lang="ts">
	import '../app.css';
	import ItemCard from './components/ItemCard.svelte';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>

<Header />

<div class="bg-[#091020]">
	<div class="flex w-max mx-auto py-3">
		<slot />
	</div>
</div>

<Footer />
