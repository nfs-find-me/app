<script lang="ts">
	import { GeoJSON, Layer, LineLayer, MapLibre, Marker } from 'svelte-maplibre';
	import type { LngLatLike } from 'svelte-maplibre';
	import type { PostType } from '../store/types.js';
	import type GeoJson from 'svelte-maplibre/dist/GeoJSON.svelte';
	import type { Position } from 'postcss';
	import { UserRestApi } from '../../api/feature/User.restAPI';
	export let post: PostType;
	let markerCoords = [2.3502761752520267, 48.856836256240854] as LngLatLike;
	export let showAnswer: boolean;
	function handleDrag(e: any) {
		markerCoords = e.detail.lngLat;
	}
	function getLine() {
		const markerCoordsArray = markerCoords as Array<number>;
		console.log(markerCoordsArray);
		const geoJsonFeature: GeoJSON.Feature = {
			type: 'Feature',
			geometry: {
				type: 'LineString',
				coordinates: [markerCoordsArray, [post.geolocation?.posX, post.geolocation?.posY]]
			},
			properties: {}
		};
		return geoJsonFeature;
	}
	function degreesToRadians(degrees: number) {
		return (degrees * Math.PI) / 180;
	}

	function distanceInKmBetweenEarthCoordinates(
		lat1: number,
		lon1: number,
		lat2: number,
		lon2: number
	) {
		const earthRadiusKm = 6371;

		const dLat = degreesToRadians(lat2 - lat1);
		const dLon = degreesToRadians(lon2 - lon1);

		lat1 = degreesToRadians(lat1);
		lat2 = degreesToRadians(lat2);

		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return earthRadiusKm * c;
	}
	function handleSubmit() {
		const markerCoordsArray = markerCoords as Array<number>;
		showAnswer = true;
		console.log(showAnswer);
		const distance = distanceInKmBetweenEarthCoordinates(
			markerCoordsArray[0],
			markerCoordsArray[1],
			post.geolocation?.posY,
			post.geolocation?.posX
		);
		const maxPoints = 2000;
		let points;
		Math.round(maxPoints - distance) <= 0
			? (points = 0)
			: (points = Math.round(maxPoints - distance));
		console.log('distance (km) : ', distance);
		console.log('points : ', points);
		console.log('give points...');
		// const userRestApi = new UserRestApi(cookies);
		// userRestApi.addPoints(l);
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
			draggable={!showAnswer}
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
					handleSubmit();
				}}>deviner</button
			>
		</div>
	{/if}
</div>
