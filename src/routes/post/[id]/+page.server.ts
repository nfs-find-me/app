import type { PageServerLoad } from './$types';
import { page } from '$app/stores';

export const load: PageServerLoad = (({ params, cookies }) => {
	console.log(params.id);
	return {
		postId: params.id
	};
}) satisfies PageServerLoad;
