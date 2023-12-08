import type { PageServerLoad } from './$types';
import { PostService } from '$lib/services/postService';

export const load: PageServerLoad = (async ({ cookies }) => {
	return {
		post: await new PostService(cookies).getByCurrentUser(),
	};
}) satisfies PageServerLoad;