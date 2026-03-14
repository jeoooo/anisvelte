<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	const errorConfig = {
		errorCode: '401',
		title: 'Unauthorized',
		message: 'You need to log in to access this page.',
		description: 'Please authenticate and try again. If you believe this is an error, contact support.',
		actions: [
			{ text: 'Log In', href: '/login' },
			{ text: 'Go Home', href: '/' }
		],
		icon: '🔒'
	};
</script>

<svelte:head>
	<title>401 Unauthorized - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
