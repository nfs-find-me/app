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
		/*
		const usernameOrEmail = data.get('usernameEmail') as string;
		const isUsernameOrEmail = validateEmail(usernameOrEmail);
		if (isUsernameOrEmail) {
			user.email = usernameOrEmail;
		}
		if (!isUsernameOrEmail) {
			user.username = usernameOrEmail;
		}
		*/
		user.username = data.get('usernameEmail') as string;
		user.password = data.get('password') as string;
		//await api.login(user);

		const response = await fetch('http://localhost:8081/api/auth/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json' // Set the content type to JSON
			}
		});
		console.log({ response });
		console.log({ status: response.status });
		console.log({ json: await response.text() });
		return { success: true };
	}
};
