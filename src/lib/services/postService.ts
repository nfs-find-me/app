import type { Cookies } from '@sveltejs/kit';
import { PostRestApi } from '../../api/feature/Post.restAPI';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';

export class PostService {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}

	public async getAll() {
		const api = new PostRestApi(this.cookies);
		const cookiesHelper = new CookiesHelper(this.cookies);
		const userId = cookiesHelper.getUserId(this.cookies);

		if (userId) {
			const posts = await api.getAll();
			return { posts: posts.data };
		} else {
			return { errorMessage: 'Vous devez être connecté.' };
		}
	}

	public async sendFormData(formData: FormData) {
		const api = new PostRestApi(this.cookies);
        const cookiesHelper = new CookiesHelper(this.cookies);
        const userId = cookiesHelper.getUserId(this.cookies);

        if (userId) {
            const post = await api.sendFormData(formData);
            return { posts: post };
        } else {
            return { errorMessage: 'Vous devez être connecté.' };
        }
	}
}
