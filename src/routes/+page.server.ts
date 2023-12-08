import { UserRestApi } from '../api/feature/User.restAPI';
import { CookiesHelper } from '../helpers/cookies/cookies.helper';
import type { PageServerLoad } from './$types';
import { PostRestApi } from '../api/feature/Post.restAPI';

export const load: PageServerLoad = (async ({ cookies }) => {
	const userRestApi = new UserRestApi(cookies);
	const postRestApi = new PostRestApi(cookies);
	const cookiesHelper = new CookiesHelper(cookies);
	const userId = cookiesHelper.getUserId(cookies);

	if (userId) {
		const user = await userRestApi.getOne(userId);
		const posts = await postRestApi.getAll();
		return { user: user.data, posts: posts.data };
	} else {
		return { errorMessage: 'Vous devez être connecté.' };
	}
}) satisfies PageServerLoad;
