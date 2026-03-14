<script lang="ts">
	interface Props {
		errorCode: string;
		title: string;
		message: string;
		description?: string;
		actions?: Array<{ text: string; href: string }>;
		icon?: string;
	}

	let {
		errorCode,
		title,
		message,
		description = '',
		actions = [],
		icon = ''
	}: Props = $props();
</script>

<svelte:head>
	<title>{errorCode} - {title}</title>
</svelte:head>

<div class="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
	<div class="error-content max-w-2xl w-full text-center py-16">
		{#if icon}
			<div class="error-icon mb-8 flex justify-center">
				<div class="text-8xl">{icon}</div>
			</div>
		{/if}

		<div class="error-code text-9xl font-black text-[#ff3e00] font-overpass mb-4">
			{errorCode}
		</div>

		<h1 class="text-4xl md:text-5xl font-bold text-white font-overpass mb-4">
			{title}
		</h1>

		<p class="text-xl text-gray-300 font-overpass font-light mb-6">
			{message}
		</p>

		{#if description}
			<p class="text-base text-gray-400 font-overpass font-light mb-10 max-w-lg mx-auto">
				{description}
			</p>
		{/if}

		{#if actions.length > 0}
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				{#each actions as action}
					<a
						href={action.href}
						class="error-button inline-flex items-center justify-center gap-2 bg-[#ff3e00] hover:bg-[#cc3200] text-white font-overpass font-semibold text-base px-8 py-4 rounded-full transition-all duration-300"
					>
						{action.text}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
