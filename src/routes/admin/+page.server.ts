import type { PageServerLoad } from './$types';
import { UserService } from '$lib/services/userService';
import { PostService } from '$lib/services/postService';
import type { Actions } from './$types';

export const load: PageServerLoad = (async ({ cookies }) => {
	return {
		user: await new UserService(cookies).getAll(),
		post: await new PostService(cookies).getAll()
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	banUser: async ({ cookies: cookies, request: request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		new UserService(cookies).banUser(userId);
	}
};
