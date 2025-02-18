<script lang="ts">
	import { game } from '$lib/scripts/game.svelte';

	let props: any = $props();
</script>

<button
	class="hover:bg-sun-500 inline-flex h-fit w-fit items-center justify-center border border-sun-800 outline-none"
	onclick={() => game.setValue(props.index, game.activeValues[props.index].plus(1))}
>
	<div class="text-sun-900 text-xl mx-2 my-0.5">{game.activeValues[0].toString()}</div>
</button>