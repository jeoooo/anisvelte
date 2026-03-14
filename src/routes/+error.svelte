<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	// Default error page - will be overridden by specific error pages
	const errorConfig = {
		errorCode: 'Error',
		title: 'Something Went Wrong',
		message: 'An unexpected error occurred.',
		description: 'Please try again later or contact support if the problem persists.',
		actions: [
			{ text: 'Go Home', href: '/' },
			{ text: 'Try Again', href: '#' }
		],
		icon: '⚠️'
	};
</script>

<svelte:head>
	<title>Error - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
