<script lang="ts">
	import MapComponent from './mapComponent.svelte';
	import { welcomeImages } from '../../store/images';
	export let postId: string;
	const currentPost = welcomeImages.find((e) => {
		return e._id === postId;
	});
	console.log(currentPost);
	let load = true;
	let showAnswer = false;
</script>

{#if load}
	<section class="relative w-full h-screen flex">LOADING</section>
{:else}
	<section
		class="relative w-full h-screen flex"
		style={"background-image: url('" + currentPost?.picture?.url + "')"}
	>
		<div
			class={'absolute z-10 transition-all rounded-sm' +
				(showAnswer
					? ' bottom-0 right-0 w-screen h-screen p-6'
					: ' bottom-6 right-6 w-[400px] h-[300px] hover:w-[560px] hover:h-[420px]')}
		>
			{#if currentPost}
				<MapComponent post={currentPost} {showAnswer} />
			{/if}
		</div>
	</section>
{/if}

<style>
	:global(.map) {
		height: 500px;
	}
</style>
