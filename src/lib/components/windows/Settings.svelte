<script>
	import { config, game } from "$lib/scripts/game.svelte";
	import Toggle from "../core/Toggle.svelte";
	import Setting from "../misc/Setting.svelte";

</script>


<div class="bg-sun-200 flex size-fit min-w-100 w-fit flex-col p-1">
	<Setting bind:setting={config.allowNegativeVelocity} name="Allow Negative Velocity" onclick={() => game.calculateVelocity()}/>
</div>