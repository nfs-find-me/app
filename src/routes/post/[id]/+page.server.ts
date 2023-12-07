import type { PageServerLoad } from './$types';
import { page } from '$app/stores';
import { PostService } from '$lib/services/postService';
import { UserRestApi } from '../../../api/feature/User.restAPI';
import { CookiesHelper } from '../../../helpers/cookies/cookies.helper';

export const load: PageServerLoad = (async ({ params, cookies }) => {
	console.log('param id : ', params.id);
	const id = params.id;
	const postService = new PostService(cookies);
	// const userRestApi = new UserRestApi(cookies);
	// const cookiesHelper = new CookiesHelper(cookies);
	// const addPoints = (id: string, points: number) => {
	// 	if (!cookiesHelper.getUserId(cookies)) {
	// 		return;
	// 	}
	// 	userRestApi.addPoints(cookiesHelper.getUserId(cookies) as string, points);
	// };
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
