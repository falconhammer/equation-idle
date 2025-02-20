<script lang="ts">
	import { game, ui } from '$lib/scripts/game.svelte';
	import OperatorIcon from '$lib/components/equation/OperatorIcon.svelte';
	import { clickoutside } from '@svelte-put/clickoutside';
	let { slot = $bindable() } = $props();

  const Symbol = $derived(slot.symbol);

	let open = $state(false);
</script>

<div>
	<!--Trigger-->
	<button
		class="hover:bg-sun-500 border-sun-800 m-1.5 inline-flex size-fit border"
		onclick={(e) => {
			e.stopPropagation();
			open = true;
		}}
	>
		<Symbol class="text-sun-900 size-6 p-0.75"/>
	</button>
	<!--Dropdown-->
	{#if open}
		<div
			class="bg-sun-300 border-sun-highlight fixed mt-1 flex size-fit flex-col border"
      use:clickoutside
      onclickoutside={() => open = false}
		>
			<!--Items-->
			{#each Object.entries(game.OPERATOR_LIST).slice(0, Object.entries(game.OPERATOR_LIST).length - 1) as [, entry], i}
				<button
					class="border-sun-highlight {entry.unlocked
						? 'hover:bg-sun-500'
						: ''} mr-2 flex h-fit w-full p-1 not-first:border-t"
					onclick={() => {
						if (entry.unlocked) {
							slot = entry;
              game.calculateVelocity();
							open = false;
						}
					}}
				>
					<entry.symbol class="{entry.unlocked ? 'text-sun-900' : 'text-sun-800'} size-6 p-0.75"/>
					<p
						class="{entry.unlocked
							? 'text-sun-900'
							: 'text-sun-800'} ml-1 self-center text-sm"
					>
						{entry.name}
					</p>
				</button>
			{/each}
			<button
				class="border-sun-highlight hover:bg-sun-500 mr-2 flex h-fit w-full border-t border-dashed p-1"
				onclick={() => {
					slot = game.OPERATOR_LIST.none;
          game.calculateVelocity();
					open = false;
				}}
			>
				<OperatorIcon value={''} class="text-sun-900 size-6 p-0.75" />
				<p class="text-sun-900 ml-1 self-center text-sm">None</p>
			</button>
		</div>
	{/if}
</div>