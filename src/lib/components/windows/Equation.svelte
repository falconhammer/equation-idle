<script>
	import { getContext } from "svelte";
	import OperationSelector from "../equation/OperationSelector.svelte";
	import ValueClicker from "../equation/ValueClicker.svelte";
	import ValueSelector from "../equation/ValueSelector.svelte";
</script>

<div class="bg-sun-200 p-4 flex h-fit w-fit flex-row items-center">
    <ValueClicker index={0} />
    <OperationSelector index={0} />
    <ValueSelector index={1} />
    <OperationSelector index={1} />
    <ValueSelector index={2} />
    <OperationSelector index={2} />
    <ValueSelector index={3} />
</div>