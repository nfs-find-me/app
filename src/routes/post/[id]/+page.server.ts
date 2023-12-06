import type { PageServerLoad } from './$types';
import { page } from '$app/stores';
import { PostService } from '$lib/services/postService';

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
