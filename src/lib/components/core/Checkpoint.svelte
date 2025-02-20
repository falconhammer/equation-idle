<!-- This is a simple debug component for logging if a point is ever mounted -->

<script>
	import { onMount } from "svelte";

    let { name } = $props()

    onMount(() => {
        console.log(`checkpoint ${name} reached`)
    })
</script>