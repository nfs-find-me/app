<script lang="ts">
	import { currentPage, handlePageClick } from '../store/pathStore';
	import SearchComponent from './searchComponent.svelte';
	import type { PostType } from '../store/types';

	export let postImage: PostType[];
</script>

{#if $currentPage == 'explore'}
	<SearchComponent />
{/if}

<section>
	<div
		class="w-full p-5 mx-auto m-10 gap-5 columns-1 space-y-5 tablet-sm:columns-3 tablet:columns-4 laptop:columns-5"
	>
		{#each postImage as image}
			<button
				on:click={() => handlePageClick('post', image._id)}
				class="relative overflow-hidden hover:cursor-pointer"
			>
				<img
					class="w-full transition duration-300 ease-in-out hover:scale-110"
					src={image.picture?.thumbnail_url}
					alt={image.picture?.thumbnail_url}
				/>
				<div
					class="absolute bottom-2 right-2 flex gap-2 items-center bg-white-secondary opacity-70 p-2 rounded-full"
				>
					<i class="fa-solid fa-eye" />
					<span class="text-gray-500">5</span>
				</div>
			</button>
		{/each}
	</div>
</section>
