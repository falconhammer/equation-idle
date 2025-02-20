<script>
    let props = $props()
</script>

<button
	class="hover:bg-sun-500 inline-flex h-fit w-fit items-center justify-center border border-sun-800 outline-none {props.class || ''}"
	onclick={props.onclick}
>
	<div class="text-sun-900 text-xl mx-2 my-0.5">{props.value.value().toString()}</div>
</button>