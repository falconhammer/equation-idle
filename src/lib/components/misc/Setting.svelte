<script>
	import Toggle from "../core/Toggle.svelte";

    let { name, onclick, setting = $bindable()} = $props()
</script>

<div class="flex flex-row items-center">
    <Toggle bind:setting onclick={onclick}/>
    <p class="text-sun-900 text-sm w-fit my-2 mx-1">{name}</p>
</div>