<script lang="ts">
	import type { PostType } from '../../store/types';

	export let posts: PostType[];
</script>

<section>
	<div
		class="w-full p-5 mx-auto mt-10 gap-5 columns-1 space-y-5 tablet-sm:columns-3 tablet:columns-4 laptop:columns-5"
	>
		{#if posts != null}
			{#each posts as image}
				<a href={'/post/' + image.id} class="overflow-hidden hover:cursor-pointer p-4">
					<div class="relative">
						<div class="absolute bottom-2 right-2 flex gap-2">
							<div class="bg-white-secondary opacity-70 p-2 rounded-lg">
								<i class="fa-solid fa-eye" />
								<span class="text-gray-500">{image.view.length}</span>
							</div>
							<div class="bg-white-secondary opacity-70 p-2 rounded-lg">
								<i class="fa-solid fa-heart" />
								<span class="text-gray-500">{image.like.length}</span>
							</div>
						</div>
						<img
							class="w-full transition duration-300 ease-in-out hover:scale-110 rounded-lg"
							src={image.picture?.thumbnail_url}
							alt={image.picture?.thumbnail_url}
						/>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</section>
