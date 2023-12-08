<script lang="ts">
	import { FullscreenControl, GeoJSON, Layer, LineLayer, MapLibre, Marker } from 'svelte-maplibre';
	import type { LngLatLike, LngLatBoundsLike } from 'svelte-maplibre';
	import type { PostType } from '../../store/types.js';
	import { enhance } from '$app/forms';
	export let post: PostType;
	let markerCoords = [2.3502761752520267, 48.856836256240854] as LngLatLike;
	export let showAnswer: boolean;

	let franceBounds: LngLatBoundsLike = [
		[-6.352731824594258, 42.53157074703472], // Coin inférieur gauche de la France
		[12.1532244672579, 51.38478063560865] // Coin supérieur droit de la France
	];

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
				coordinates: [
					markerCoordsArray,
					[post.geolocation?.posX as number, post.geolocation?.posY as number]
				]
			},
			properties: {}
		};
		distanceInKmBetweenEarthCoordinates(
			markerCoordsArray[1],
			markerCoordsArray[0],
			post.geolocation?.posY as number,
			post.geolocation?.posX as number
		);
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
	let pointValue: number;
	function handleSubmit() {
		const markerCoordsArray = markerCoords as Array<number>;
		console.log(
			markerCoordsArray,
			post.geolocation?.posY as number,
			post.geolocation?.posX as number
		);
		console.log(showAnswer);
		const distance = distanceInKmBetweenEarthCoordinates(
			markerCoordsArray[1],
			markerCoordsArray[0],
			post.geolocation?.posY as number,
			post.geolocation?.posX as number
		);
		const maxPoints = 2000;
		let points;
		Math.round(maxPoints - distance) <= 0
			? (points = 0)
			: (points = Math.round(maxPoints - distance));
		console.log('distance (km) : ', distance);
		console.log('points : ', points);
		pointValue = points;
	}

	$: showAnswer, showAnswer ? handleSubmit() : null;
</script>

<div
	class={'w-full h-full z-8 rounded-sm' +
		(showAnswer ? ' bg-black bg-opacity-50 p-6' : ' bg-white')}
>
	<MapLibre
		center={markerCoords}
		zoom={3}
		class="w-full h-full rounded-sm relative"
		style={'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'}
		maxBounds={franceBounds}
	>
		<FullscreenControl position="top-right" />
		{#if showAnswer === true}
			<div
				class="absolute shadow-md top-1/4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white font-bold text-center p-4 rounded-md"
			>
				<p class="text-2xl">Points marqués :</p>
				<p class="text-4xl">{pointValue}</p>
			</div>
		{/if}
		<Marker
			offset={[0, -16]}
			lngLat={markerCoords}
			draggable={!showAnswer}
			on:drag={(e) => {
				console.log('drag', e.detail.lngLat);
				handleDrag(e);
			}}
			class="w-10 h-10 transition-all bg-red-300 text-black rounded-full grid place-items-center"
		>
			<img src="/favicon.svg" class="h-10" alt="marker" />
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
				offset={[0, -16]}
				lngLat={[post.geolocation?.posX, post.geolocation?.posY]}
				class="w-8 h-8 bg-red-300 text-black rounded-full grid place-items-center relative"
			>
				<span
					class="text-lg bg-blue bg-opacity-50 rounded-sm py-1 px-2 font-semibold absolute bottom-full"
				>
					Réponse
				</span>

				<img src="/favicon.svg" class="h-8" alt="marker" />
			</Marker>
		{/if}
	</MapLibre>
	{#if !showAnswer}
		<form
			class="bg-white p-2 flex"
			method="post"
			use:enhance={() => {
				return async ({ update }) => {
					showAnswer = true;
					update({ reset: false });
				};
			}}
		>
			<input name="lng1lat1" class="hidden" type="text" value={markerCoords.toString()} />
			<input name="lat2" class="hidden" type="text" bind:value={post.geolocation.posY} />
			<input name="lng2" class="hidden" type="text" bind:value={post.geolocation.posX} />
			<button type="submit" class="border-2 px-4 py-1 mx-auto rounded-lg font-bold">deviner</button>
		</form>
	{/if}
</div>
