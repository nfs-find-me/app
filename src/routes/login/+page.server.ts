import type { Actions, PageServerLoad } from './$types';
import { User } from '../../model/user/User';
import { validateEmail } from '../../helpers/formatString.helper';
import { AuthRestApi } from '../../api/feature/Auth.restAPI';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies: cookies, request }) => {
		const api = new AuthRestApi();
		const user = new User();
		const data = await request.formData();
		const usernameOrEmail = data.get('usernameEmail') as string;
		const isUsernameOrEmail = validateEmail(usernameOrEmail);
		if (isUsernameOrEmail) {
			user.email = usernameOrEmail;
		}
		if (!isUsernameOrEmail) {
			user.username = usernameOrEmail;
		}
		user.username = data.get('usernameEmail') as string;
		user.password = data.get('password') as string;
		user.id = data.get('userId') as string;
		let isValidForm: Boolean;
		try {
			const response = await api.login(user);
			const tokens = response.data;
			const expireTime = response.exp;
			const userId = response.data.userId;
			const username = response.data.username;
			const cookiesHelper = new CookiesHelper(cookies);
			cookiesHelper.setAuthCookies(
				username,
				userId,
				tokens.jwtToken,
				tokens.refreshToken,
				expireTime
			);
			isValidForm = true;
		} catch (e) {
			console.error({ e });
			isValidForm = false;
		}
		if (isValidForm) {
			throw redirect(302, '/');
		}
	}
};
