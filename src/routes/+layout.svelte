<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-[#222]">
	<Header />
	<slot />
	<Footer />
</div>
