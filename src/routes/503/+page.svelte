<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	const errorConfig = {
		errorCode: '503',
		title: 'Service Unavailable',
		message: 'We\'re currently under maintenance.',
		description: 'We\'re performing scheduled maintenance to improve our services. Please check back soon.',
		actions: [
			{ text: 'Go Home', href: '/' },
			{ text: 'Check Status', href: '#' }
		],
		icon: '🔧'
	};
</script>

<svelte:head>
	<title>503 Service Unavailable - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
