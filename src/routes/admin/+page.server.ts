import type { PageServerLoad } from './$types';
import { UserService } from '$lib/services/userService';
import { PostService } from '$lib/services/postService';

export const load: PageServerLoad = (async ({ cookies }) => {
	return {
		user: await new UserService(cookies).getAll(),
		post: await new PostService(cookies).getAll()
	};
}) satisfies PageServerLoad;
