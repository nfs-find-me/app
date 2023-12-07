<script lang="ts">
	import FilterBtn from './common/filterBtn.svelte';

	const filterBtn: Array<{ id: string; text: string }> = [
		{ id: 'most-recent', text: 'Plus récents' },
		{ id: 'oldest', text: 'Plus anciens' },
		{ id: 'most-viewed', text: 'Plus vues' },
		{ id: 'most-liked', text: 'Plus likés' },
		{ id: 'most-popular', text: 'Populaires' },
		{ id: 'following', text: 'Abonnements' }
	];
</script>

<div
	class="flex justify-center items-center flex-row m-auto py-8 px-8 w-11/12 gap-8 overflow-auto laptop:w-2/3"
>
	{#each filterBtn as content}
		<FilterBtn id={content.id} text={content.text} />
	{/each}
</div>
