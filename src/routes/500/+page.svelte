<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	const errorConfig = {
		errorCode: '500',
		title: 'Internal Server Error',
		message: 'Something went wrong on our end.',
		description: 'Our team has been notified and is working to fix the issue. Please try again later.',
		actions: [
			{ text: 'Go Home', href: '/' },
			{ text: 'Refresh Page', href: '#' }
		],
		icon: '⚙️'
	};
</script>

<svelte:head>
	<title>500 Internal Server Error - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
