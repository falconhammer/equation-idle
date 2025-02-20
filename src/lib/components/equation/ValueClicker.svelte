<script lang="ts">
	import { game } from '$lib/scripts/game.svelte';
	import { Constant } from '$lib/scripts/types.svelte';
	import Value from '../core/Value.svelte';

	let { value = $bindable() } = $props();
</script>

<Value {value} onclick={() => {value = new Constant(value.value().plus(1)); game.calculateVelocity()}} />

<!-- <button
	class="hover:bg-sun-500 inline-flex h-fit w-fit items-center justify-center border border-sun-800 outline-none"
	onclick={() => game.activeValues[props.index] = new Constant(game.activeValues[props.index].value().plus(1))}
>
	<div class="text-sun-900 text-xl mx-2 my-0.5">{game.activeValues[0].value().toString()}</div>
</button> -->