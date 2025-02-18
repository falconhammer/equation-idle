<script lang="ts">
	import { ui } from '$lib/scripts/game.svelte';
	import Panel from '$lib/components/misc/Panel.svelte';
	import Settings from '$lib/components/windows/Settings.svelte';
	</script>

{#each Object.keys(ui.windows) as key}
	<Panel window={ui.windows[key]} >
		<svelte:component this={ui.windows[key].component}/>
	</Panel>
{/each}

<Panel window={ui.settingsWindow} >
	<Settings />
</Panel>