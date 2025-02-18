<script lang="ts">
	import { game } from '$lib/scripts/game.svelte';
	import { upgrades } from '$lib/scripts/upgrades.svelte';
	import { setContext } from 'svelte';
	import Upgrade from '../misc/Upgrade.svelte';
	
	let count = $state(0);
	const setCount: (number: number) => void = (number: number) => {count = number}

	setContext('setCount', setCount);
</script>

<div class="bg-sun-200 flex size-fit min-w-100 flex-col p-1 max-w-150">
	{#each upgrades as upgrade, i}
		{#if !game.upgradesPurchased[i] && upgrade.visibility()}
			<Upgrade {upgrade} {i} {count} />
		{/if}
	{/each}
	{#if count == 0}
		<p class="text-sun-800 py-1 text-center text-sm">No upgrades currently</p>
	{/if}
</div>
