<script lang="ts">
	import { game, ui } from '$lib/scripts/game.svelte';
	import OperatorIcon from '$lib/components/equation/OperatorIcon.svelte';
	import { clickoutside } from '@svelte-put/clickoutside';
	let { index } = $props();

	let open = $state(false);

	let items = ['Plus', 'Minus', 'Multiply', 'Divide'];
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
		<OperatorIcon
			value={game.operators[index]}
			class="text-sun-900 size-6 {game.operators[index] == '' ? 'p-1' : 'p-0.75'}"
		/>
	</button>
	<!--Dropdown-->
	{#if open}
		<div
			class="bg-sun-300 border-sun-highlight fixed mt-1 flex size-fit flex-col border"
			use:clickoutside
			onclickoutside={(e) => (open = false)}
		>
			<!--Items-->
			{#each [...Array(items.length).keys()] as i}
				<button
					class="border-sun-highlight {game.operatorUnlocks[i]
						? 'hover:bg-sun-500'
						: ''} mr-2 flex h-fit w-full p-1 not-first:border-t"
					onclick={() => {
						if (game.operatorUnlocks[i]) {
							game.operators[index] = game.OPERATOR_LIST[i];
							open = false;
							game.calculateVelocity();
						}
					}}
				>
					<OperatorIcon
						value={game.OPERATOR_LIST[i]}
						class="{game.operatorUnlocks[i] ? 'text-sun-900' : 'text-sun-800'} size-6 p-0.75"
					/>
					<p
						class="{game.operatorUnlocks[i]
							? 'text-sun-900'
							: 'text-sun-800'} ml-1 self-center text-sm"
					>
						{items[i]}
					</p>
				</button>
			{/each}
			<button
				class="border-sun-highlight hover:bg-sun-500 mr-2 flex h-fit w-full border-t border-dashed p-1"
				onclick={() => {
					game.operators[index] = '';
					open = false;
				}}
			>
				<OperatorIcon value={''} class="text-sun-900 size-6 p-0.75" />
				<p class="text-sun-900 ml-1 self-center text-sm">None</p>
			</button>
		</div>
	{/if}
</div>

<!-- <DropdownMenu.Root>
    <div class="inline-flex size-10 relative active:scale-98 mx-1">
      <OutlineCircle {index} class="text-foreground dark:text-foreground-dark absolute w-10 h-10 pointer-events-none"/>
      <DropdownMenu.Trigger
        class="focus-visible inline-flex size-10 items-center justify-center rounded-full bg-background dark:bg-background-dark text-sm font-medium text-foreground shadow-btn hover:bg-gray-200/10 active:scale-98"
      >
          <OperatorIcon value={game.operators[index]} class="size-6 text-foreground dark:text-foreground-dark"/>
      </DropdownMenu.Trigger>
    </div>
    <DropdownMenu.Content
      class="w-full max-w-[229px] rounded-xl border border-foreground dark:border-foreground-dark bg-background dark:bg-background-dark px-1 py-1.5 shadow-lg"
      transition={flyAndScale}
      sideOffset={8}
    >
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium ring-0! ring-transparent! data-highlighted:bg-gray-600/50"
        onclick={() => game.setOperator(index, "+")}
        disabled={!game.operatorUnlocks[0]}
      >
        <div class="flex items-center text-foreground dark:text-foreground-dark">
            <Plus class="mr-2 size-5 text-foreground dark:text-foreground-dark"/>
          Add
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background dark:bg-background-dark text-xs text-foreground dark:text-foreground-dark shadow-xs"
          >
            +
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium ring-0! ring-transparent! data-highlighted:bg-gray-600/50"
        onclick={() => game.setOperator(index, "-")}
        disabled={!game.operatorUnlocks[1]}
      >
        <div class="flex items-center text-foreground dark:text-foreground-dark">
            <Minus class="mr-2 size-5 text-foreground dark:text-foreground-dark"/>
          Minus
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background dark:bg-background-dark text-xs text-foreground dark:text-foreground-dark shadow-xs"
          >
            -
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium ring-0! ring-transparent! data-highlighted:bg-gray-600/50"
        onclick={() => game.setOperator(index, "*")}
        disabled={!game.operatorUnlocks[2]}
      >
        <div class="flex items-center text-foreground dark:text-foreground-dark">
            <X class="mr-2 size-5 text-foreground dark:text-foreground-dark"/>
          Multiply
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background dark:bg-background-dark text-xs text-foreground dark:text-foreground-dark shadow-xs"
          >
            *
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium ring-0! ring-transparent! data-highlighted:bg-gray-600/50"
        onclick={() => game.setOperator(index, "/")}
        disabled={!game.operatorUnlocks[3]}
      >
        <div class="flex items-center text-foreground dark:text-foreground-dark">
            <Divide class="mr-2 size-5 text-foreground dark:text-foreground-dark"/>
          Divide
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background dark:bg-background-dark text-xs text-foreground dark:text-foreground-dark shadow-xs"
          >
            /
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="my-1 -ml-1 -mr-1 block h-px bg-foreground dark:bg-foreground-dark" />
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium ring-0! ring-transparent! data-highlighted:bg-gray-600/50"
        onclick={() => game.setOperator(index, "")}
      >
        <div class="flex items-center text-foreground dark:text-foreground-dark">
            <CircleDashed class="mr-2 size-5 text-foreground dark:text-foreground-dark"/>
          None
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root> -->
