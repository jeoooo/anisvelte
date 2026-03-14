<script lang="ts">
	let {
		media_type = 'anime',
		sortBy = 'rank',
		onSortChange
	}: {
		media_type: 'anime' | 'manga';
		sortBy: string;
		onSortChange: (value: string) => void;
	} = $props();

	let sortOptions = $derived(
		media_type === 'anime'
			? [
					{ value: 'rank', label: 'Rank' },
					{ value: 'score', label: 'Score' },
					{ value: 'popularity', label: 'Popularity' },
					{ value: 'members', label: 'Members' },
					{ value: 'favorites', label: 'Favorites' }
				]
			: [
					{ value: 'rank', label: 'Rank' },
					{ value: 'score', label: 'Score' },
					{ value: 'popularity', label: 'Popularity' },
					{ value: 'members', label: 'Members' },
					{ value: 'favorites', label: 'Favorites' }
				]
	);

	let isOpen = $state(false);
	let dropdownElement: HTMLDivElement;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(value: string) {
		if (onSortChange) {
			onSortChange(value);
		}
		isOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	let selectedLabel = $derived(sortOptions.find((opt) => opt.value === sortBy)?.label || 'Rank');
</script>

<svelte:window on:click={handleClickOutside} />

<div class="flex items-center justify-between mb-4 md:mb-6">
	<div class="flex items-center gap-2">
		<span class="text-gray-400 text-sm font-overpass">Sort by:</span>
		<div class="relative" bind:this={dropdownElement}>
			<button
				onclick={toggleDropdown}
				class="flex items-center gap-2 bg-zinc-700/50 hover:bg-zinc-700/80 text-white text-sm font-overpass px-3 py-1.5 rounded-lg transition-colors duration-200 border border-zinc-600/50"
			>
				<span>{selectedLabel}</span>
				<i
					class="fa-solid fa-chevron-down text-xs transition-transform duration-200"
					class:rotate-180={isOpen}
				></i>
			</button>

			{#if isOpen}
				<div
					class="absolute top-full left-0 mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50 min-w-[140px] overflow-hidden"
				>
					{#each sortOptions as option}
						<button
							onclick={() => selectOption(option.value)}
							class="w-full text-left px-3 py-2 text-sm font-overpass text-gray-300 hover:bg-zinc-700/80 hover:text-white transition-colors duration-150"
							class:bg-zinc-700/60={option.value === sortBy}
						>
							{option.label}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
