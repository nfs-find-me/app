import { UserService } from '$lib/services/userService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async ({ cookies }) => {
    return new UserService(cookies).getOne();
}) satisfies PageServerLoad;