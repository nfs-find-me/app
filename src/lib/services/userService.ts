import type { Cookies } from '@sveltejs/kit';
import { UserRestApi } from '../../api/feature/User.restAPI';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';

export class UserService {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}

	public async getOne() {
		const api = new UserRestApi(this.cookies);
		const cookiesHelper = new CookiesHelper(this.cookies);
		const userId = cookiesHelper.getUserId(this.cookies);

		if (userId) {
			const user = await api.getOne(userId);
			return { user: user.data };
		} else {
			return { errorMessage: 'Vous devez être connecté.' };
		}
	}

	public async getAll() {
		const api = new UserRestApi(this.cookies);
		const cookiesHelper = new CookiesHelper(this.cookies);
		const userId = cookiesHelper.getUserId(this.cookies);

		if (userId) {
			const users = await api.getAll();
			return { users: users.data };
		} else {
			return { errorMessage: 'Vous devez être connecté.' };
		}
	}
}
