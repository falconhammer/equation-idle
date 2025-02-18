<script lang="ts">
	import { game, ui } from '$lib/scripts/game.svelte';
	import type { Value as ValueType } from '$lib/scripts/types.svelte';
	import Value from '../core/Value.svelte';

	function selectValue(value: ValueType) {
		if (ui.windows.valueDrawer.index > 0) {
			game.activeValues[ui.windows.valueDrawer.index] = value.value;
			game.activeValueTypes[ui.windows.valueDrawer.index] = value.type;
			ui.windows.valueDrawer.index = -1;
			ui.windows.valueDrawer.visible = false;
			game.calculateVelocity();
		}
	}

	const tabs = ["Constants", "Special"]
</script>

<div>
	<div class="flex flex-row justify-evenly w-full h-fit flex-wrap">
		{#each tabs as tab, i}
			<button class="min-w-[25%] px-2 text-sm text-center grow not-last:border-r border-b border-sun-highlight {ui.windows.valueDrawer.tab == i ? 'bg-sun-200 text-sun-900' : 'bg-sun-100 text-sun-800'}" onclick={() => ui.windows.valueDrawer.tab = i}>{tab}</button>
		{/each}
	</div>
	{#if ui.windows.valueDrawer.tab == 0}
		<div
			class="bg-sun-200 flex size-fit max-w-200 w-full flex-row flex-wrap items-center justify-center p-2"
		>
			{#each game.valueDrawer as value}
				<Value class="m-2" {value} onclick={selectValue(value)} />
			{/each}
		</div>
	{/if}
</div>
