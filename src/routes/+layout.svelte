<script lang="ts">
	import '../app.css';
	import ItemCard from './components/ItemCard.svelte';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div class="bg-[#222]">
	<Header />
	<slot />
	<Footer />
</div>
