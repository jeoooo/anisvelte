<script lang="ts">
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	const errorConfig = {
		errorCode: '400',
		title: 'Bad Request',
		message: 'The server couldn\'t understand your request.',
		description: 'Please check your input and try again. Make sure all required fields are filled correctly.',
		actions: [
			{ text: 'Go Home', href: '/' },
			{ text: 'Try Again', href: '#' }
		],
		icon: '⚠️'
	};
</script>

<svelte:head>
	<title>400 Bad Request - AniSvelte</title>
</svelte:head>

<ErrorPage {...errorConfig} />
