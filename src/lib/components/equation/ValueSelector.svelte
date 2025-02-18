<script lang="ts">
	import { game, ui } from '$lib/scripts/game.svelte';
	
	let props = $props();
</script>

<button
	class="hover:bg-sun-500 inline-flex h-fit w-fit items-center justify-center border border-sun-800 outline-none {ui.windows.valueDrawer.visible && ui.windows.valueDrawer.index == props.index ? 'bg-sun-accent': ''}"
	onclick={() => {
		ui.windows.valueDrawer.visible = true
		ui.windows.valueDrawer.index = props.index
		}}
>
	<div class="text-sun-900 text-xl mx-2 my-0.5">{game.activeValues[props.index].toString()}</div>
</button>