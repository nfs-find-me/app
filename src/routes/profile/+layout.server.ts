import { UserService } from '$lib/services/userService';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ cookies }) => {
    return new UserService(cookies).getOne();
}) satisfies LayoutServerLoad;