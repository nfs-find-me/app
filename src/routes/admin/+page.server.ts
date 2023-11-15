import type { PageServerLoad } from './$types';
import { UserService } from '$lib/services/userService';

export const load: PageServerLoad = (async ({ cookies }) => {
	return new UserService(cookies).getAll();
}) satisfies PageServerLoad;
