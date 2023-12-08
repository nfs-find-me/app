import type { Actions, PageServerLoad } from './$types';
import { AuthRestApi } from '../../api/feature/Auth.restAPI';
import { User } from '../../model/user/User';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const api = new AuthRestApi();
		let user = new User();
		const data = await request.formData();

		user.email = data.get('email') as string;
		user.password = data.get('password') as string;
		user.username = data.get('username') as string;

		await api.register(user);

		throw redirect(300, '/login');
	}
};
