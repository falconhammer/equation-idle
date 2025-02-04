<script>
	import { game } from "$lib/game.svelte";
	import OperationSelector from "$lib/OperationSelector.svelte";
	import { Button } from "bits-ui";
</script>

<div class="w-full">
    <p class="text-lg text-white bg-black rounded-lg m-2 w-fit h-fit p-2 text-center inline-block">
        Score: {game.score}
    </p>
    
    <p class="text-lg text-white bg-zinc-700 rounded-lg m-2 w-fit h-fit p-2 text-center inline-block">
        Velocity: {game.velocity}
    </p>
</div>

<Button.Root 
    onclick={() => game.velocity = game.velocity.plus(1)}
    class="bg-slate-500 text-black rounded-3xl w-fit h-fit text-center p-3 m-2 shadow-md hover:shadow-none transition-shadow ease-in-out duration-200"
>
  Velocity +1
</Button.Root>

<Button.Root 
    onclick={() => game.changeTickrate(1000)}
    class="bg-slate-500 text-black rounded-3xl w-fit h-fit text-center p-3 m-2 shadow-md hover:shadow-none transition-shadow ease-in-out duration-200"
>
  Tickrate: 1000
</Button.Root>

<Button.Root 
    onclick={() => game.changeTickrate(500)}
    class="bg-slate-500 text-black rounded-3xl w-fit h-fit text-center p-3 m-2 shadow-md hover:shadow-none transition-shadow ease-in-out duration-200"
>
  Tickrate: 500
</Button.Root>

<Button.Root 
    onclick={() => game.changeTickrate(20)}
    class="bg-slate-500 text-black rounded-3xl w-fit h-fit text-center p-3 m-2 shadow-md hover:shadow-none transition-shadow ease-in-out duration-200"
>
  Tickrate: 20
</Button.Root>

<OperationSelector />