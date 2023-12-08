import type { PageServerLoad } from './$types';
import { PostService } from '$lib/services/postService';
import type { Actions } from '@sveltejs/kit';
import { UserService } from '$lib/services/userService';
import { number } from 'svelte-use-form';
import { distanceInKmBetweenEarthCoordinates } from '../../../helpers/distanceHelper';

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
			750 -
				distanceInKmBetweenEarthCoordinates(Number(lat1), Number(lng1), Number(lat2), Number(lng2))
		);

		if (points <= 0) {
			points = 0;
		}
		console.log(points);
		await userService.addPoints(points);
	}
};
