<script lang="ts">
	import { game, ui } from '$lib/scripts/game.svelte';
	import { Constant, type Value as ValueType } from '$lib/scripts/types.svelte';
	import Value from '$lib/components/core/Value.svelte'

	function selectValue(value: ValueType) {
		if (ui.windows.valueDrawer.index > 0) {
			game.activeValues[ui.windows.valueDrawer.index] = value;
			ui.windows.valueDrawer.index = -1;
			ui.windows.valueDrawer.visible = false;
			game.calculateVelocity();
		}
	}

	const tabs = ['Constants', 'Special'];
</script>

<div>
	<div class="flex h-fit w-full flex-row flex-wrap justify-evenly">
		{#each tabs as tab, i}
			<button
				class="border-sun-highlight min-w-[25%] grow border-b px-2 text-center text-sm not-last:border-r {ui
					.windows.valueDrawer.tab == i
					? 'bg-sun-200 text-sun-900'
					: 'bg-sun-100 text-sun-800'}"
				onclick={() => (ui.windows.valueDrawer.tab = i)}>{tab}</button
			>
		{/each}
	</div>
	<div
		class="bg-sun-200 flex size-fit w-full max-w-200 flex-row flex-wrap items-center justify-center p-2"
	>
		{#if ui.windows.valueDrawer.tab == 0}
			{#each game.valueDrawer as value}
				<Value class="m-2" {value} onclick={selectValue(value)} />
			{/each}
		{:else if ui.windows.valueDrawer.tab == 1}
			<p class="text-sun-900 px-4">Not yet implemented</p>
		{/if}
	</div>
</div>
