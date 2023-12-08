import { UserRestApi } from '../../api/feature/User.restAPI';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';
import type { Actions, PageServerLoad } from './$types';
import { PostRestApi } from '../../api/feature/Post.restAPI';
import { setPosts, store } from '../../store/store';

export const load: PageServerLoad = (async ({ cookies, url }) => {
	const userRestApi = new UserRestApi(cookies);
	const postRestApi = new PostRestApi(cookies);
	const cookiesHelper = new CookiesHelper(cookies);
	const userId = cookiesHelper.getUserId(cookies);
	const search = url.searchParams.get('search');
	const filter = url.searchParams.get('filter');

	if (userId) {
		const user = await userRestApi.getOne(userId);
		const posts = await postRestApi.getAll();
		return { user: user.data, posts: posts.data };
	} else {
		return { errorMessage: 'Vous devez être connecté.' };
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies: cookies, request }) => {
		const userRestApi = new UserRestApi(cookies);
		const postRestApi = new PostRestApi(cookies);
		const cookiesHelper = new CookiesHelper(cookies);
		const userId = cookiesHelper.getUserId(cookies);

		const filter = '';

		switch (filter) {
			case 'most-recent':
				const posts = await postRestApi.getMostRecentPost();
				return { user: user.data, posts: posts.data };
			case 'oldest':
				const posts2 = await postRestApi.getOldestPost();
				return { user: user.data, posts: posts2.data };
			case 'most-viewed':
				const posts3 = await postRestApi.getMostViewedPost();
				return { user: user.data, posts: posts3.data };
			case 'most-liked':
				const posts4 = await postRestApi.getMostLikedPost();
				return { user: user.data, posts: posts4.data };
			case 'most-popular':
				const posts5 = await postRestApi.getMostPopularPost();
				return { user: user.data, posts: posts5.data };
			case 'following':
				const posts6 = await postRestApi.getFollowingPost(userId);
				return { user: user.data, posts: posts6.data };
			default:
				return { errorMessage: 'Filtre inconnu.' };
		}
	}
};
