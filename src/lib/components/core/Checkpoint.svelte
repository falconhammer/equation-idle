<script>
	import { onMount } from "svelte";

    let { name } = $props()

    onMount(() => {
        console.log(`checkpoint ${name} reached`)
    })
</script>