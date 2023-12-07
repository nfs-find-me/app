<script lang="ts">
	import MapComponent from './mapComponent.svelte';
	import type { PostType } from '../../store/types';
	import { onMount } from 'svelte';
	export let post: PostType;
	console.log(post);
	let load = false;
	let showAnswer = false;
	let showInfo = false;
	let infoBox: Element;
	let infoBoxHeight: number;
	onMount(() => {
		console.log(infoBox.clientHeight);
		infoBoxHeight = infoBox.clientHeight + 12;
	});
</script>

{#if load}
	<section class="relative w-full h-screen flex">LOADING</section>
{:else}
	<section
		class="fixed top-0 left-0 w-screen h-screen flex bg-cover bg-center overflow-hidden"
		style={"background-image: url('" + post?.picture?.url + "')"}
	>
		<div class="w-full h-full relative">
			<div
				class={'z-10 transition-all rounded-sm' +
					(showAnswer
						? ' w-full h-full'
						: ' absolute bottom-20 right-6 w-[400px] h-[300px] hover:w-[560px] hover:h-[420px]')}
			>
				{#if post}
					<MapComponent bind:showAnswer {post} />
				{/if}
			</div>
			<button
				style:bottom={showInfo ? infoBoxHeight + 'px' : '12px'}
				class={'absolute z-9 transition-all text-white left-4' +
					(showAnswer ? ' bg-blue rounded-full p-3' : '')}
				on:click={() => (showInfo = !showInfo)}
				><i class="fa-solid fa-eye fa-2xl shadow-md" /></button
			>
			<a
				href="/"
				class={'absolute z-9 transition-all text-white left-4 top-6' +
					(showAnswer ? ' bg-blue rounded-full p-3' : '')}
				><i class="fa-solid fa-2xl fa-arrow-left z-9" /></a
			>
			<div
				bind:this={infoBox}
				id="info-box"
				class={'absolute p-4 z-9 w-full transition-all bg-gradient-to-t from-black to-transparent text-white left-0' +
					(showInfo ? ' bottom-0' : ' top-full')}
			>
				<p class="pb-1 z-9">{post.description}</p>
				<p class="text-sm font-bold">
					Par @{post.user?.username}, le {new Date(post.createdAt).toLocaleDateString()}
				</p>
			</div>
		</div>
	</section>
{/if}

<style>
	:global(.map) {
		height: 500px;
	}
</style>
