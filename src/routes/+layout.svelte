<script lang="ts">
	import Navbar from '$lib/components/misc/Navbar.svelte';
import '../app.css';
	let { children } = $props();
</script>

<div class="h-full">
	<Navbar />
	{@render children()}
</div>
