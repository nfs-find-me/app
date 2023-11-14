<script lang="ts">
	import { MapLibre, Marker } from 'svelte-maplibre';
	import { welcomeImages } from '../store/images';
	import { currentImage } from '../store/pathStore';
	const currentPost = welcomeImages.find((e) => {
		return e._id === $currentImage;
	});
	console.log(currentPost);
	let boundPos;
</script>

<section class="relative w-full h-screen flex">
	<div
		class="absolute bottom-1 right-1 w-[400px] h-[300px] hover:w-[560px] hover:h-[420px] z-10 transition-all"
	>
		<MapLibre
			center={[2.3502761752520267, 48.856836256240854]}
			zoom={3}
			class="w-full h-full z-10"
			standardControls
			style={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'}
			><Marker
				lngLat={[2.3502761752520267, 48.856836256240854]}
				draggable
				on:drag={(e) => {
					console.log('drag', e.detail.lngLat);
				}}
				class="border-gray-200 border shadow-2xl focus:outline-2 focus:outline-black w-20 h-8 bg-red-300 text-black rounded-full grid place-items-center"
			>
				<span> Drag me ! </span>
			</Marker>
		</MapLibre>
	</div>
</section>

<style>
	:global(.map) {
		height: 500px;
	}
</style>
