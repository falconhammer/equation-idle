<script lang="ts">
	import { game } from '$lib/scripts/game.svelte';
	import { getContext, onDestroy, onMount } from 'svelte';

	let { upgrade, i, count } = $props();

    let setCount: (number: number) => void = getContext('setCount')

	let buyable = $derived(game.score.greaterThanOrEqualTo(upgrade.price))

    onMount(() => {
        setCount(count + 1)
    })

    onDestroy(() => {
        setCount(count - 1)
    })
</script>

<button
	class="border-sun-highlight m-1 border p-1 text-left {buyable
		? 'hover:bg-sun-500 bg-sun-400'
		: ' bg-sun-100'}"
	onclick={() => {
		if (buyable) {
			game.score = game.score.sub(upgrade.price);
			game.upgradesPurchased[i] = true;
			upgrade.effect();
		}
	}}
>
	<h1 class={buyable ? 'text-sun-900' : ' text-sun-800'}>
		{upgrade.name}
	</h1>
	<p class="text-sun-800 text-sm">{upgrade.description}</p>
	<p
		class="{buyable
			? 'text-sun-accent'
			: ' text-sun-800'} float-right mt-1 text-sm"
	>
		Cost: {upgrade.price}
	</p>
</button>
