<script lang="ts">
	import { goto } from '$app/navigation';

	export let text: string;
	export let id: string;

	function handleClick() {
		goto('explore/?filter=' + id);
	}
</script>

<button on:click={handleClick}>
	<span
		class="py-2 px-4 border-2 w-32 rounded-50 border-blue text-center text-blue font-semibold hover:cursor-pointer"
		>{text}</span
	>
</button>
