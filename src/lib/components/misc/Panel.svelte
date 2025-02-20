<script lang="ts">
	import X from "$lib/components/misc/icons/X.svelte"
	import { setContext } from "svelte";
    import { ui } from "$lib/scripts/game.svelte";

    let props = $props()

    let currentZ = $derived(ui.nextZ())

    // svelte-ignore non_reactive_update
    let width : number;
    // svelte-ignore non_reactive_update
    let height : number;

    let left = $state(40);
    let top = $state(50);
    let dragging = false;
    let title = $state("")
    const setTitle = (input: string) => title = input
    setContext('setTitle', setTitle);

    function mouseDown() {
        dragging = ui.dragging = true
    }

    function mouseUp() {
        dragging = ui.dragging = false
    }

    function drag(e: MouseEvent) {
        let newX = left + e.movementX;
        let newY = top + e.movementY;
        if (dragging) {
            left = Math.max(0, Math.min(newX, window.innerWidth - width - 1))
            top = Math.max(0, Math.min(newY, window.innerHeight - height - 1))
        }
    }

    function minimize() {
        props.window.visible = false
    }

</script>

<svelte:window onmousemove={drag} onmouseup={mouseUp} onblur={mouseUp}/>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="select-none absolute border border-sun-highlight min-w-40 overflow-hidden size-fit" style="left: {left}px; top: {top}px; z-index: {props.window.z}" hidden={!props.window.visible} bind:clientWidth={width} bind:clientHeight={height} onmousedown={() => {if (props.window.z != ui.currentZ) {props.window.z = ui.nextZ()}}}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div onmousedown={mouseDown} class="w-full h-6 flex justify-end bg-sun-400 border-b border-sun-highlight">
        <p class="ml-1.5 text-sm self-center mr-auto text-sun-900">{props.window.title}</p>
        <!-- <button onclick={minimize} class="h-full aspect-square border-l border-zinc-600 hover:bg-zinc-500"><img src="/static/icons/x-3x.png" class="w-full aspect-square p-1.5" style="image-rendering: pixelated;" alt=""></button> -->
        <button onmousedown={minimize} class="h-full aspect-square border-l border-sun-highlight"><X class="w-full p-0.5 text-sun-800 hover:text-sun-900" /></button>
    </div>
    <div>
        {@render props.children(width)}
    </div>
</div>