<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	const errorConfig = {
		errorCode: '404',
		title: 'Page Not Found',
		message: 'The page you\'re looking for doesn\'t exist.',
		description: 'It may have been moved, deleted, or you entered the wrong URL. Let\'s help you find what you\'re looking for.',
		actions: [
			{ text: 'Go Home', href: '/' },
			{ text: 'Browse Anime', href: '/' },
			{ text: 'Search', href: '/' }
		],
		icon: '🔍'
	};
</script>

<svelte:head>
	<title>404 Not Found - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
