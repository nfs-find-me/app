import type { PageServerLoad } from './$types';
import { PostService } from '$lib/services/postService';
import type { Actions } from '@sveltejs/kit';
import { UserService } from '$lib/services/userService';

export const load: PageServerLoad = (async ({ params, cookies }) => {
	console.log('param id : ', params.id);
	const id = params.id;
	const postService = new PostService(cookies);
	try {
		const post = await postService.getOne(id);
		console.log('post front : ', post);
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
		const points = Number(data.get('points') as string);
		console.log(points);
		await userService.addPoints(points);
	}
};
