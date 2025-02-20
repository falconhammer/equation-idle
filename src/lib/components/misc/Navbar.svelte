<script>
    import { game, ui } from "$lib/scripts/game.svelte";
</script>

<nav class="h-[4vh]">
    <ul class="h-full list-none m-0 p-0 overflow-hidden bg-sun-500 border-b border-sun-800">
        <li class="h-full float-left bg-sun-700 text-sun-900 border-r border-sun-800 py-2 px-2">{+game.score.toFixed(ui.fixedRoundingPlaces)}</li>
        <li class="h-full float-left bg-sun-blue-mute text-sun-900 border-r border-sun-800 py-2 px-2">{+game.velocity.toFixed(ui.fixedRoundingPlaces)}/s</li>
        {#each Object.keys(ui.windows) as key}
            <li><button class="p-2 h-full float-left {ui.windows[key].visible ? 'text-sun-blue' : 'text-sun-800'} hover:text-sun-accent" onclick={() => {ui.windows[key].visible = !ui.windows[key].visible; ui.windows[key].z = ui.nextZ()}}>{ui.windows[key].title}</button></li>
        {/each}
        <li><button class="py-2 px-3 h-full float-right {ui.settingsWindow.visible ? 'text-sun-blue' : 'text-sun-800'} hover:text-sun-accent" onclick={() => {ui.settingsWindow.visible = !ui.settingsWindow.visible; ui.settingsWindow.z = ui.nextZ()}}>{ui.settingsWindow.title}</button></li>
    </ul>
</nav>