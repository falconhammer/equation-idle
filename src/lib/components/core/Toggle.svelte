<script>
	import X from "../misc/icons/X.svelte";
    import Check from "../misc/icons/Check.svelte";

    function noop() {}

    let { onclick = noop, setting = $bindable()} = $props()
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="w-8 h-4 border-1 border-sun-800 m-2" onclick={() => {setting = !setting;onclick()}}>
    <div class="h-full w-[50%] {setting ? 'bg-sun-800 float-right' : 'bg-sun-highlight float-left'} flex justify-center">
        {#if setting}
            <Check class="size-3 self-center text-sun-200"/>
        {:else}
            <X class="size-3 self-center text-sun-800"/>
        {/if}
    </div>
</button>