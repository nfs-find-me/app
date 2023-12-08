<script lang="ts">
	import FilterBtn from './common/filterBtn.svelte';

	const filterBtn: Array<{ id: string; text: string; fill: boolean }> = [
		{ id: 'most-recent', text: 'Plus récents', fill: false },
		{ id: 'oldest', text: 'Plus anciens', fill: false },
		{ id: 'most-viewed', text: 'Plus vues', fill: false },
		{ id: 'most-liked', text: 'Plus likés', fill: false },
		{ id: 'most-popular', text: 'Populaires', fill: false }
	];
	$: _valueInput = 'Plus récents';
	$: _currentIndex = 0;
	function handleClick(valueInput: string, currentIndex: number) {
		_valueInput = valueInput;
		_currentIndex = currentIndex;
	}
</script>

<div
	class="flex justify-center items-center flex-row m-auto py-8 px-8 w-11/12 gap-8 overflow-auto laptop:w-2/3"
>
	{#each filterBtn as content, i}
		<button
			class="btn btn-color-blue"
			class:btn-fill={_currentIndex === i}
			id={content.id}
			on:click={() => handleClick(content.text, i)}
		>
			{content.text}
		</button>
	{/each}
</div>
