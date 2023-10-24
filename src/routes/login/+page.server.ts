import type { Actions, PageServerLoad } from './$types';

import { User } from '../../lib/model/user/User';
import { validateEmail } from '$lib/helpers/formatString.helper';
import { error } from '@sveltejs/kit';
import { AuthRestApi } from '$lib/api/feature/Auth.restAPI';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies, request }) => {
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
		try {
			const response = await api.login(user);
			//  @ts-ignore
			const JWT = response.data;
			//  @ts-ignore
			const expireTime = response.exp;
			cookies.set('jwt', JWT, {
				httpOnly: true,
				sameSite: 'strict',
				secure: false,
				path: '/',
				maxAge: expireTime
			});
			return { success: true };
		} catch {
			return { success: false, message: 'Identifiants invalides' };
		}
	}
};
