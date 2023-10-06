import type { Actions, PageServerLoad } from './$types';
import { AuthRestApi } from '../../api/feature/Auth.restAPI';
import { User } from '../../model/user/User';
import { validateEmail } from '$lib/helpers/formatString.helper';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
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
		const response = await api.login2(user);
		console.log({ data: response });
		//console.log('login', { response: response.json() });
		return { success: true };
	}
};
