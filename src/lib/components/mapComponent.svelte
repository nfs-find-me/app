<script lang="ts">
	import { GeoJSON, Layer, LineLayer, MapLibre, Marker } from 'svelte-maplibre';
	import type { LngLatLike } from 'svelte-maplibre';
	import type { PostType } from '../store/types.js';
	import type GeoJson from 'svelte-maplibre/dist/GeoJSON.svelte';
	import type { Position } from 'postcss';
	export let post: PostType;
	let markerCoords = [2.3502761752520267, 48.856836256240854] as LngLatLike;
	export let showAnswer: boolean;
	function handleDrag(e: any) {
		markerCoords = e.detail.lngLat;
	}
	function getLine() {
		const geoJsonFeature: GeoJSON.Feature = {
			type: 'Feature',
			geometry: {
				type: 'LineString',
				coordinates: [markerCoords, [post.geolocation?.posX, post.geolocation?.posY]]
			},
			properties: {}
		};
		return geoJsonFeature;
	}
</script>

<div
	class={'w-full h-full z-10 rounded-sm' +
		(showAnswer ? ' bg-black bg-opacity-50 p-6' : ' bg-white')}
>
	<MapLibre
		center={markerCoords}
		zoom={3}
		class="w-full h-full rounded-sm"
		standardControls
		style={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'}
		on:load={() => {
			post;
		}}
	>
		<Marker
			lngLat={markerCoords}
			draggable
			on:drag={(e) => {
				console.log('drag', e.detail.lngLat);
				handleDrag(e);
			}}
			class="w-10 h-10 transition-all bg-red-300 text-black rounded-full grid place-items-center"
		>
			<img src="../favicon.svg" class="h-10" alt="marker" />
		</Marker>
		{#if showAnswer === true}
			<GeoJSON id="test" data={getLine()}
				><LineLayer
					layout={{ 'line-cap': 'round', 'line-join': 'round' }}
					paint={{
						'line-width': 5,
						'line-color': '#0390BF',
						'line-opacity': 0.8
					}}
				/></GeoJSON
			>

			<Marker
				lngLat={[post.geolocation?.posX, post.geolocation?.posY]}
				class="w-8 h-8 bg-red-300 text-black rounded-full grid place-items-center"
			>
				<img src="../favicon.svg" class="h-8" alt="marker" />
			</Marker>
		{/if}
	</MapLibre>
	{#if !showAnswer}
		<div class="bg-white p-2 flex">
			<button
				class="border-2 px-4 py-1 mx-auto rounded-lg font-bold"
				on:click={() => {
					showAnswer = true;
					console.log(showAnswer);
				}}>deviner</button
			>
		</div>
	{/if}
</div>
