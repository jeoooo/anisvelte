<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	const errorConfig = {
		errorCode: '403',
		title: 'Forbidden',
		message: 'You don\'t have permission to access this page.',
		description: 'This area is restricted. Contact support if you believe this is an error.',
		actions: [
			{ text: 'Go Home', href: '/' },
			{ text: 'Contact Support', href: '/about' }
		],
		icon: '🛡️'
	};
</script>

<svelte:head>
	<title>403 Forbidden - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
