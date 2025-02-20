<script>
	import { getContext } from "svelte";
	import OperationSelector from "../equation/OperationSelector.svelte";
	import ValueClicker from "../equation/ValueClicker.svelte";
	import ValueSelector from "../equation/ValueSelector.svelte";
	import { game } from "$lib/scripts/game.svelte";
</script>

<div class="bg-sun-200 p-4 flex h-fit w-full flex-row justify-center items-center">
    <ValueClicker bind:value={game.activeValues[0]} />
    <!-- <OperationSelector bind:slot={game.operators[0]} />
    <ValueSelector index={1} />
    <OperationSelector bind:slot={game.operators[1]} />
    <ValueSelector index={2} />
    <OperationSelector bind:slot={game.operators[2]} />
    <ValueSelector index={3} /> -->
    {#each [...Array(game.equationLength - 1).keys()] as i}
        <OperationSelector bind:slot={game.operators[i]} />
        <ValueSelector bind:value={game.activeValues[i + 1]} index={i + 1} />
    {/each}
</div>