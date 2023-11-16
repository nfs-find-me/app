<script lang="ts">
	import { MapLibre, Marker } from 'svelte-maplibre';
	import type { LngLatLike } from 'svelte-maplibre';
	import type { PostType } from '../store/types.js';
	export let post: PostType;
	let markerCoords = [2.3502761752520267, 48.856836256240854] as LngLatLike;
	export let showAnswer: boolean;
	function handleDrag(e: any) {
		markerCoords = e.detail.lngLat;
		console.log('drag', e.detail.lngLat);
	}
</script>

<MapLibre
	center={markerCoords}
	zoom={3}
	class="w-full h-full z-10 rounded-sm"
	standardControls
	style={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'}
	><Marker
		lngLat={markerCoords}
		draggable
		on:drag={(e) => {
			console.log('drag', e.detail.lngLat);
		}}
		class="w-10 h-10 transition-all bg-red-300 text-black rounded-full grid place-items-center"
	>
		<img src="../favicon.svg" class="h-10" alt="marker" />
	</Marker>
	{#if showAnswer === true}
		<Marker
			lngLat={[post.geolocation?.posX, post.geolocation?.posY]}
			class="w-8 h-8 bg-red-300 text-black rounded-full grid place-items-center"
		>
			<img src="../favicon.svg" class="h-8" alt="marker" />
		</Marker>
	{/if}
</MapLibre>
