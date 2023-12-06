import type { Cookies } from '@sveltejs/kit';
import { UserRestApi } from '../../api/feature/User.restAPI';
import { PostRestApi } from '../../api/feature/Post.restAPI';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';

export class PostService {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}

	public async getOne(postId: string) {
		const api = new PostRestApi(this.cookies);
		const cookiesHelper: CookiesHelper = new CookiesHelper(this.cookies);
		console.log('postId : ', postId);
		if (postId) {
			try {
				const user = await api.getOne(postId);
				console.log('post service : ', { post: user.data });
				return { post: user.data };
			} catch (e) {
				console.error('erreur - ', e);
			}
		} else {
			return { errorMessage: 'Aucun id spécifié.' };
		}
	}

	public async getAll() {
		const api = new UserRestApi(this.cookies);
		const cookiesHelper = new CookiesHelper(this.cookies);
		const userId = cookiesHelper.getUserId(this.cookies);

		if (userId) {
			const posts = await api.getAll();
			return { posts: posts.data };
		} else {
			return { errorMessage: 'Vous devez être connecté.' };
		}
	}

	public async getByCurrentUser() {
		const api = new PostRestApi(this.cookies);
		const cookiesHelper = new CookiesHelper(this.cookies);
		const userId = cookiesHelper.getUserId(this.cookies);

		if (userId) {
			const posts = await api.getByCurrentUser(userId);
			return { posts: posts.data };
		} else {
			return { errorMessage: 'Vous devez être connecté.' };
		}
	}
}
