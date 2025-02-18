<script lang="ts">
    import {
        Plus,
        Minus,
        Divide,
		CircleDashed,
     } from "lucide-svelte";
     import X from '$lib/components/misc/icons/X.svelte'

    let props: any = $props();
    // let { value } = $props();
</script>

{#if props.value == "+"}
    <Plus class={props.class || ''}/>
{:else if props.value == "-"}
    <Minus class={props.class || ''}/>
{:else if props.value == "*"}
    <X class={props.class || ''}/>
{:else if props.value == "/"}
    <Divide class={props.class || ''}/>
{:else}
    <CircleDashed class={props.class || ''}/>
{/if}