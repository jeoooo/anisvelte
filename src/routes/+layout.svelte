<script lang="ts">
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let isLoading = true; // Initialize as loading
	onMount(async () => {
		isLoading = false; // Initialize as loading
	});
</script>

<Header />
{#if isLoading}
	<div class="spinner-container">
		<img
			src="https://media.tenor.com/DpgEL1ITpE4AAAAM/nanashi-mumei-loading.gif"
			alt="Loading..."
			class="spinner-gif"
		/>
	</div>
{:else}
	<slot />
{/if}
<Footer />

<style>
	/* Loading spinner styles */
	.spinner-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: white; */
		background-color: #f9f8f1;
		z-index: 9999; /* Ensure the spinner appears on top of other elements */
	}

	.spinner {
		border: 4px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		border-top: 4px solid #2e51a2; /* Use your desired spinner color */
		width: 40px;
		height: 40px;
		animation: spin 1s linear infinite;
	}

	.spinner-gif {
		max-width: 400px; /* Adjust the size of the GIF as needed */
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
