<script lang="ts">
	import type { PageData } from '../$types';
	import UserHomeComponent from '$lib/components/userHomeComponent.svelte';
	import type { PostType } from '../../store/types';

	let isLogged: boolean;

	const filterBtn: Array<{ id: string; text: string; fill: boolean }> = [
		{ id: 'most-recent', text: 'Plus récents', fill: false },
		{ id: 'oldest', text: 'Plus anciens', fill: false },
		{ id: 'most-viewed', text: 'Plus vues', fill: false },
		{ id: 'most-liked', text: 'Plus likés', fill: false },
		{ id: 'most-popular', text: 'Populaires', fill: false }
	];
	$: _valueInput = 'Plus récents';
	$: _currentIndex = -1;
	function handleClick(valueInput: string, currentIndex: number) {
		console.log({ posts });
		_valueInput = valueInput;
		if (_currentIndex != currentIndex) {
			_currentIndex = currentIndex;
		} else {
			_currentIndex = -1;
		}
		posts = filterPosts(_currentIndex);
	}

	export let data: PageData;

	$: posts = data.posts as PostType[];

	function filterPosts(index: number) {
		switch (index) {
			case 0:
				return posts.sort((a, b) => {
					const dateA = new Date(a.createdAt).getTime();
					const dateB = new Date(b.createdAt).getTime();
					return dateB - dateA;
				});
			case 1:
				return posts.sort((a, b) => {
					const dateA = new Date(a.createdAt).getTime();
					const dateB = new Date(b.createdAt).getTime();
					return dateA - dateB;
				});
			case 2:
				return posts.sort((a, b) => b.view.length - a.view.length);
			case 3:
				return posts.sort((a, b) => b.like.length - a.like.length);
			default:
				posts = data.posts as PostType[];
				return posts;
		}
	}

	let searchTerm = '';
</script>

<div class="m-auto w-11/12 tablet:w-1/3 mt-6">
	<form>
		<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
			>Rechercher ...</label
		>
		<div
			class="relative block w-full p-4 pl-14 text-md rounded-50 border-2 border-blue flex justify-between"
		>
			<div class="absolute inset-y-0 left-0 flex items-center pl-3">
				<i class="fa-solid fa-magnifying-glass text-xl" />
			</div>
			<input
				type="search"
				name="search"
				bind:value={searchTerm}
				placeholder="Rechercher par utilisateur"
			/>
			<button type="submit">Envoyer</button>
		</div>
	</form>
</div>

<!-- <SearchComponent /> -->
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

<UserHomeComponent {posts} />
