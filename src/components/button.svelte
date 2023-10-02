<script>
	export let text = 'TEXT BUTTON A MODIFIER';
	export let fill = true;
</script>

{#if fill}
	<button
		class="border border-blue bg-blue text-white rounded-full p-2
	transition duration-300 ease-in-out hover:bg-blue_dark"
	>
		{text}
	</button>
{:else}
	<button
		class="border border-blue rounded-full p-2
		transition duration-300 ease-in-out hover:bg-blue_light"
	>
		{text}
	</button>
{/if}
