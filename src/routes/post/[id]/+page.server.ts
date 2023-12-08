import type { PageServerLoad } from './$types';
import { PostService } from '$lib/services/postService';
import type { Actions } from '@sveltejs/kit';
import { UserService } from '$lib/services/userService';
import { number } from 'svelte-use-form';

export const load: PageServerLoad = (async ({ params, cookies }) => {
	console.log('param id : ', params.id);
	const id = params.id;
	const postService = new PostService(cookies);
	try {
		const post = await postService.getOne(id);
		// console.log('post front : ', post);
		return {
			postId: id,
			post: post
		};
	} catch (e) {
		console.error('error front : ', e);
		return;
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies, request }) => {
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

		console.log('request');
		const userService = new UserService(cookies);
		const data = await request.formData();
		console.log('request', data);
		console.log('points data', data.get('lng1lat1'));
		const lng1lat1 = data.get('lng1lat1');
		if (!lng1lat1) return;
		const lat1 = lng1lat1.toString().split(',')[1].trim();
		const lng1 = lng1lat1.toString().split(',')[0].trim();
		const lat2 = data.get('lat2')!.toString();
		const lng2 = data.get('lng2')!.toString();
		console.log('lat1, lng1, lat2, lng2', lat1, lng1, lat2, lng2);
		let points = Math.round(
			2000 -
				distanceInKmBetweenEarthCoordinates(Number(lat1), Number(lng1), Number(lat2), Number(lng2))
		);

		if (points <= 0) {
			points = 0;
		}
		console.log(points);
		await userService.addPoints(points);
	}
};
